import { Suspense } from "react"
import SparePartsClient from "./SparePartsClient"

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SparePartsClient />
    </Suspense>
  )
}
