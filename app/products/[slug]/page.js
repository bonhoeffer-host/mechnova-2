import ProductClient from './productClient'
import detailedModelData from './detailedModelData.json'

export async function generateMetadata({ params }) {
const { slug } = await params;

  return {
    title: detailedModelData?.[slug]?.meta_title || "",
    description: detailedModelData?.[slug]?.meta_description || "",
  }
}

export default function Page({ params }) {
  return <ProductClient slug={params.slug} />
}