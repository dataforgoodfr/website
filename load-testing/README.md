# Load Testing Suite for dataforgood.fr

A high-intensity load testing suite for the Data for Good website using [Grafana k6](https://k6.io/).

## Overview

This suite tests the performance and scalability of the dataforgood.fr website under intense, realistic traffic conditions. The test simulates thousands of users spending approximately 1 minute on the site, with scenarios including stress testing and traffic spikes.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose
- (Optional) [Make](https://www.gnu.org/software/make/) for convenient command shortcuts

## Quick Start

### Using Make (Recommended)

```bash
# Show all available commands
make help

# Run the stress-spike test
make test

# Run test with monitoring (stores results in InfluxDB)
make test-with-monitoring

# Start monitoring stack (InfluxDB + Grafana)
make up

# Stop all services
make down
```

### Using Docker Compose

```bash
# Run the test
docker compose run --rm k6 run tests/main.js

# Run with monitoring enabled
docker compose run --rm -e K6_OUT=influxdb=http://influxdb:8086 k6 run tests/main.js

# Start monitoring stack
docker compose up -d influxdb grafana

# Access Grafana at http://localhost:3000
```

## Project Structure

```
load-testing/
├── tests/
│   └── main.js              # Stress-spike test (up to 8000 users)
├── scenarios/
│   └── donation-journey.js  # Main page + donation page navigation (~1 min)
├── utils/
│   ├── config.js            # Configuration and thresholds
│   └── helpers.js           # Helper functions
├── grafana/
│   └── provisioning/        # Auto-configured datasources and dashboards
├── docker-compose.yml       # Docker services configuration
├── Makefile                 # Convenient command shortcuts
├── package.json             # npm scripts
└── README.md                # This file
```

## The Test

### Stress-Spike Test (tests/main.js)

A comprehensive test combining stress testing and traffic spikes to simulate real-world high-traffic scenarios.

**Profile:**
- **Duration:** 8 minutes
- **Peak Users:** 8000 concurrent users
- **User Behaviors:**
  - 70% complete donation journey (main page → donation page, ~1 min)
  - 30% quick browsing (main page only, ~30-45 sec)

**Traffic Pattern:**
1. **Baseline (1 min):** Ramp to 1000 users
2. **Stress (1 min):** Increase to 3000 users
3. **Spike (30 sec):** Sudden jump to 8000 users
4. **Sustained (2 min):** Hold at 8000 users
5. **Recovery (1 min):** Drop to 3000 users
6. **Baseline (30 sec):** Return to 1000 users
7. **Ramp down (1 min):** Complete shutdown

**Run the test:**
```bash
make test
# or with monitoring
make test-with-monitoring
```

## User Scenarios

### Donation Journey (~1 minute)
1. Load the main page (https://dataforgood.fr/)
2. Scroll/read content (20-30 seconds)
3. Navigate to donation page (https://dataforgood.fr/faire-un-don)
4. Read donation page (20-30 seconds)

### Quick Page Load (~30-45 seconds)
- Load the main page only
- Quick browsing (30-45 seconds)

## Performance Thresholds

The test uses spike test thresholds to account for extreme load:

- 95th percentile response time < 6000ms (6 seconds)
- 99th percentile response time < 10000ms (10 seconds)
- Error rate < 15%

These thresholds are intentionally relaxed to handle the extreme 8000-user spike while still catching major performance degradation.

## Monitoring with Grafana

The suite includes InfluxDB and Grafana services for real-time monitoring.

### Start Monitoring Stack

```bash
make up
# or
docker compose up -d influxdb grafana
```

### Access Grafana

1. Open http://localhost:3000 in your browser
2. Login with default credentials (anonymous auth enabled)
3. The InfluxDB datasource is pre-configured

### Run Tests with InfluxDB Output

```bash
make test-with-monitoring
# or
docker compose run --rm -e K6_OUT=influxdb=http://influxdb:8086 k6 run tests/main.js
```

## Advanced Usage

### Custom Test Parameters

```bash
# Run with different target URL
docker compose run --rm k6 run tests/main.js -e BASE_URL=https://staging.dataforgood.fr
```

### Output Formats

```bash
# JSON output
docker compose run --rm k6 run tests/main.js --out json=results.json

# CSV output
docker compose run --rm k6 run tests/main.js --out csv=results.csv

# Multiple outputs
docker compose run --rm k6 run tests/main.js --out json=results.json --out influxdb=http://influxdb:8086
```

### Interactive Shell

```bash
make shell
# or
docker compose run --rm k6 sh
```

## Interpreting Results

k6 outputs comprehensive metrics:

- **http_req_duration:** Request latency (p95, p99, median)
- **http_req_failed:** Percentage of failed requests
- **http_reqs:** Total HTTP requests per second
- **vus:** Number of active virtual users
- **iterations:** Number of scenario completions

Example output:
```
     ✓ main page loaded successfully
     ✓ donation page loaded successfully

     checks.........................: 100.00% ✓ 2340      ✗ 0
     data_received..................: 45 MB   750 kB/s
     data_sent......................: 120 kB  2 kB/s
     http_req_duration..............: avg=234ms min=120ms med=198ms max=890ms p(95)=450ms p(99)=650ms
     http_reqs......................: 2340    39/s
     iteration_duration.............: avg=8.2s  min=7.1s  med=8.1s  max=15.8s p(95)=10.2s p(99)=12.5s
     iterations.....................: 1170    19.5/s
     vus............................: 50      min=0       max=50
     vus_max........................: 50      min=50      max=50
```

## Tips for Success

1. **Start with monitoring:** Always run `make up` first to start Grafana/InfluxDB
2. **Watch resources:** Monitor server CPU, memory, network, and database during the 8000-user spike
3. **Establish baselines:** Run tests regularly to track performance trends
4. **CDN is critical:** With 8000 users, ensure static assets are properly cached
5. **Database scaling:** Connection pools must handle extreme concurrent load
6. **Gradual scaling:** Consider starting with lower user counts and adjusting the test stages

## Troubleshooting

### Docker Issues

```bash
# Restart services
docker compose restart

# Clean up and rebuild
docker compose down -v
docker compose pull
```

### High Error Rates

- Check server logs for errors
- Verify the application is running
- Monitor network connectivity
- Check if CDN is working properly

### Performance Issues

- Monitor server resources (CPU, memory, disk I/O)
- Review database query performance
- Check CDN cache hit rates
- Analyze slow queries in application logs
- Monitor network latency

## Cleanup

```bash
# Stop all services
make down

# Stop services and remove volumes
make clean

# Or with docker compose
docker compose down -v
```

## References

- [k6 Documentation](https://k6.io/docs/)
- [k6 with Docker](https://k6.io/docs/getting-started/running-k6/#docker)
- [Test Types Guide](https://k6.io/docs/test-types/introduction/)
- [k6 Metrics](https://k6.io/docs/using-k6/metrics/)
- [Thresholds](https://k6.io/docs/using-k6/thresholds/)
- [k6 + InfluxDB + Grafana](https://k6.io/docs/results-output/real-time/influxdb/)
