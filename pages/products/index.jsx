import React from 'react';
import cls from 'classnames';
import { Button, FilterMenu, RelatedCard } from '../../components/ui';
import { ProductList, ProductFilter } from '../../components/product';
import { Search } from '../../components/icons';
import s from '../../styles/Products.module.scss';
import MobileMenu from '../../components/ui/FilterMenu/MobileMenu/MobileMenu';

const Products = () => {
  return (
    <div className={cls('container')}>
      <div className={cls(s.productWrapper)}>
        <div className={cls('row')}>
          {/* left section */}
          <div className={cls('col-md-3 mb-md-0 mb-4')}>
            <div
              className={cls(
                'bs-light d-md-block d-none br-light',
                s.menuWrapper
              )}
            >
              <FilterMenu />
            </div>

            {/* forHtml mobile devices */}
            <MobileMenu />
          </div>

          {/* right section */}
          {/* Product Item section */}
          <div className={cls('col-md-9')}>
            <div className={cls('bs-light br-light', s.productWrapper)}>
              {/* product filter section */}
              <div className={cls('mb-4 px-4 pt-2', s.productFilter)}>
                <ProductFilter />
              </div>

              {/* product sort section */}
              <div className={cls('mb-3 px-4', s.productSearch)}>
                <form action='' className={cls(s.productForm)}>
                  <div className={cls(s.searchBox)}>
                    <input
                      type='email'
                      className={cls(
                        'ps-5 bs-light br-light py-3 form-control'
                      )}
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='search product'
                    />
                  </div>
                  <div className={cls(s.searchBtn)}>
                    <Button className={'btn p-0'} icon={<Search />} />
                  </div>
                </form>
                <div className={cls('d-none py-3', s.searchQuery)}>
                  <span>Search result forHtml </span>
                  <span className={cls(s.queryText)}>boy character</span>
                </div>
              </div>

              {/* showing result section */}

              <div className={cls('px-4 mb-3', s.resutNumber)}>
                <div className={cls('text-grey', s.resultText)}>
                  <span className={cls('fw-bold')}>121</span> items found in{' '}
                  <span className={cls('fw-bold')}>3d model</span> catagory
                </div>
              </div>

              {/* sort section */}
              <div
                className={cls(
                  'pb-2 px-4 d-md-flex d-none align-items-center',
                  s.productSort
                )}
              >
                <div className={cls('me-4', s.sortText)}>Sort By</div>
                <div
                  className={cls('d-md-flex align-items-center', s.sortSection)}
                >
                  {/* each sort option */}
                  <div className={cls('me-4', s.sortTab, s.sortActive)}>
                    <span>Relavance</span>
                  </div>

                  {/* each sort option */}
                  <div className={cls('me-4', s.sortTab)}>
                    <span>Popularity</span>
                  </div>

                  {/* each sort option */}
                  <div className={cls('me-4', s.sortTab)}>
                    <span>Most New</span>
                  </div>

                  {/* each sort option */}
                  <div className={cls('me-4', s.sortTab)}>
                    <span>Price(hight to low)</span>
                  </div>

                  {/* each sort option */}
                  <div className={cls('me-4', s.sortTab)}>
                    <span>Price(Low to High)</span>
                  </div>
                </div>

                {/* dropdown */}
              </div>

              {/* bottom section */}
              <div className={cls('p-4 br-tp-light', s.productList)}>
                <ProductList />
              </div>

              <div className={cls('p-4', s.relatedProduct)}>
                <RelatedCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
