import ProductClient from './productClient'
import detailedModelData from './detailedModelData.json'

export async function generateMetadata({ params }) {
const { slug } = await params;

  return {
    title: detailedModelData?.[slug]?.meta_title || "",
    description: detailedModelData?.[slug]?.meta_description || "",
  }
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ProductClient slug={slug} />
}