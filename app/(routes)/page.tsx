import getBillboard from '@/actions/get-billboards'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'

export const revalidate = 0
const HomePage = async () => {

const products   = await getProducts({ isFeatured: true})
const billboard   = await getBillboard("293ec4b7-c7b3-46ae-92db-7086e29a7b03")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-6">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage