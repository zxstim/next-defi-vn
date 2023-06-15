import { useRouter } from "next/router";

export default function constructSlug(slug) {
  const router = useRouter();
  
  if (slug.split("-").pop() === "vi" && router.locale === "vi") {
    let slugEn = slug.split("-").slice(0, -1).join("-");
    let slugVi = slug;
    return { slugEn, slugVi };
  } else {
    let slugEn = slug;
    let slugVi = slug + "-vi";
    return { slugEn, slugVi };
  }
}