import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const Header = async () => {
  const t = await getTranslations("layout");

  return (
    <header>
      <Link href="/">
        <Image
          src="/images/dataforgood.svg"
          alt={t("header.title")}
          width={176}
          height={43}
          className="w-24 md:w-36 lg:w-44 object-contain"
        />
      </Link>
    </header>
  );
};

export default Header;
