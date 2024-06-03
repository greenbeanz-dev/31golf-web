import ProductListDetail from "./ProductListDetail";
import SortSelect from "./SortSelect";

const ProductTabBarJeju = () => {
  return (
    <>
      <SortSelect />
      <ProductListDetail category1="국내" category2="제주도" />;
    </>
  );
};

export default ProductTabBarJeju;
