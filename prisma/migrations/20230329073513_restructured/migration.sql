-- CreateTable
CREATE TABLE "Lists_Investors" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "tags" JSONB NOT NULL,
    "description" TEXT NOT NULL,
    "website" VARCHAR(200) NOT NULL,
    "telegram" VARCHAR(200) NOT NULL,
    "twitter" VARCHAR(200) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "linkedin" VARCHAR(200) NOT NULL,
    "facebook" VARCHAR(200) NOT NULL,
    "instagram" VARCHAR(200) NOT NULL,
    "youtube" VARCHAR(200) NOT NULL,
    "discord" VARCHAR(200) NOT NULL,
    "github" VARCHAR(200) NOT NULL,
    "tiktok" VARCHAR(200) NOT NULL,
    "medium" VARCHAR(200) NOT NULL,
    "reddit" VARCHAR(200) NOT NULL,
    "crunchbase" VARCHAR(200) NOT NULL,
    "angelco" VARCHAR(200) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Lists_Investors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lists_Wallets" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "chains" JSONB NOT NULL,
    "tech" JSONB NOT NULL,
    "description" TEXT NOT NULL,
    "website" VARCHAR(200) NOT NULL,
    "telegram" VARCHAR(200) NOT NULL,
    "twitter" VARCHAR(200) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "linkedin" VARCHAR(200) NOT NULL,
    "facebook" VARCHAR(200) NOT NULL,
    "instagram" VARCHAR(200) NOT NULL,
    "youtube" VARCHAR(200) NOT NULL,
    "discord" VARCHAR(200) NOT NULL,
    "github" VARCHAR(200) NOT NULL,
    "tiktok" VARCHAR(200) NOT NULL,
    "medium" VARCHAR(200) NOT NULL,
    "reddit" VARCHAR(200) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Lists_Wallets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lists_Jobs" (
    "id" TEXT NOT NULL,
    "job_title" VARCHAR(255) NOT NULL,
    "tags" JSONB NOT NULL,
    "description" TEXT NOT NULL,
    "company_name" VARCHAR(255) NOT NULL,
    "company_website" VARCHAR(200) NOT NULL,
    "job_location" VARCHAR(255) NOT NULL,
    "apply_here" VARCHAR(200) NOT NULL,
    "contact_email" VARCHAR(254) NOT NULL,
    "salary_currency" VARCHAR(255) NOT NULL,
    "salary_lower_bound" VARCHAR(255) NOT NULL,
    "salary_upper_bound" VARCHAR(255) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Lists_Jobs_pkey" PRIMARY KEY ("id")
);
