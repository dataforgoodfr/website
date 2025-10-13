.PHONY: help test test-with-monitoring up down clean shell

help: ## Show this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

test: ## Run stress-spike test (up to 8000 users, 8 min)
	docker compose run --rm k6 run tests/main.js

test-with-monitoring: ## Run test with InfluxDB monitoring
	docker compose run --rm -e K6_OUT=influxdb=http://influxdb:8086 k6 run tests/main.js

up: ## Start InfluxDB and Grafana services
	docker compose up -d influxdb grafana

down: ## Stop all services
	docker compose down

clean: ## Stop services and remove volumes
	docker compose down -v

shell: ## Open shell in k6 container
	docker compose run --rm k6 sh
