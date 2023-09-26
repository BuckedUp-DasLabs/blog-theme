import CaretDown from "../ui/CaretDown"
import ImageComponent from "../ui/ImageComponent"
import s from "./MainNav.module.scss"
const MainNav = ({isMobileActive}) => {
  return (
    <nav className={`${s.mainNav} ${isMobileActive && s.active}`}>
      <ul className={s.hasDropdown}>
        <li>
          <a href="./category.html">
            HEALTH + WELLNESS
            <CaretDown/>
          </a>
          <span className={s.mobileOnly}>
            HEALTH + WELLNESS
            <CaretDown/>
          </span>
        </li>
        <li className={s.dropdown}>
          <ul className={s.dropdown__links}>
            <li className={s.mobileOnly}>
              <a href="./category.html">
                HEALTH + WELLNESS
              </a>
            </li>
            <li>
              <a href="./category.html">body</a>
            </li>
            <li>
              <a href="./category.html">diy</a>
            </li>
            <li>
              <a href="./category.html">Lorem</a>
            </li>
            <li>
              <a href="./category.html">giving back</a>
            </li>
            <li>
              <a href="./category.html">health</a>
            </li>
            <li>
              <a href="./category.html">mind</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">sexual wellness</a>
            </li>
            <li>
              <a href="./category.html">soul</a>
            </li>
          </ul>
          <ul className={s.dropdown__posts}>
            <li>
              <a href="./post.html">
                <div className={s.dropdown__posts__img}>
                  <ImageComponent
                    src="/blog.jpg"
                    alt=""
                    width="258"
                    height="258"
                  />
                </div>
                <span>Is PMS Brain a Real Thing?</span>
              </a>
            </li>
            <li>
              <a href="./post.html">
                <div className={s.dropdown__posts__img}>
                  <ImageComponent
                    src="/blog.jpg"
                    alt=""
                    width="258"
                    height="258"
                  />
                </div>
                <span>Is PMS Brain a Real Thing?</span>
              </a>
            </li>
            <li>
              <a href="./post.html">
                <div className={s.dropdown__posts__img}>
                  <ImageComponent
                    src="/blog.jpg"
                    alt=""
                    width="258"
                    height="258"
                  />
                </div>
                <span>Is PMS Brain a Real Thing?</span>
              </a>
            </li>
            <li>
              <a href="./post.html">
                <div className={s.dropdown__posts__img}>
                  <ImageComponent
                    src="/blog.jpg"
                    alt=""
                    width="258"
                    height="258"
                  />
                </div>
                <span>Is PMS Brain a Real Thing?</span>
              </a>
            </li>
            <li>
              <a href="./post.html">
                <div className={s.dropdown__posts__img}>
                  <ImageComponent
                    src="/blog.jpg"
                    alt=""
                    width="258"
                    height="258"
                  />
                </div>
                <span>Is PMS Brain a Real Thing?</span>
              </a>
            </li>
            <li>
              <a href="./post.html">
                <div className={s.dropdown__posts__img}>
                  <ImageComponent
                    src="/blog.jpg"
                    alt=""
                    width="258"
                    height="258"
                  />
                </div>
                <span>Is PMS Brain a Real Thing?</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="./category.html">
            LIFE + STYLE
            <CaretDown/>
          </a>
          <span className={s.mobileOnly}>
            LIFE + STYLE
            <CaretDown/>
          </span>
        </li>
        <li className={s.dropdown}>
          <ul className={s.dropdown__links}>
            <li className={s.mobileOnly}>
              <a href="./category.html">
                HEALTH + WELLNESS
              </a>
            </li>
            <li>
              <a href="./category.html">body</a>
            </li>
            <li>
              <a href="./category.html">diy</a>
            </li>
            <li>
              <a href="./category.html">Lorem</a>
            </li>
            <li>
              <a href="./category.html">giving back</a>
            </li>
            <li>
              <a href="./category.html">health</a>
            </li>
            <li>
              <a href="./category.html">mind</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">relationships</a>
            </li>
            <li>
              <a href="./category.html">sexual wellness</a>
            </li>
            <li>
              <a href="./category.html">soul</a>
            </li>
          </ul>
          <ul className={s.dropdown__posts}>
            <li>
              <a href="./post.html">
                <div className={s.dropdown__posts__img}>
                  <ImageComponent
                    src="/blog.jpg"
                    alt=""
                    width="258"
                    height="258"
                  />
                </div>
                <span>Is PMS Brain a Real Thing?</span>
              </a>
            </li>
            <li>
              <a href="./post.html">
                <div className={s.dropdown__posts__img}>
                  <ImageComponent
                    src="/blog.jpg"
                    alt=""
                    width="258"
                    height="258"
                  />
                </div>
                <span>Is PMS Brain a Real Thing?</span>
              </a>
            </li>
            <li>
              <a href="./post.html">
                <div className={s.dropdown__posts__img}>
                  <ImageComponent
                    src="/blog.jpg"
                    alt=""
                    width="258"
                    height="258"
                  />
                </div>
                <span>Is PMS Brain a Real Thing?</span>
              </a>
            </li>
            <li>
              <a href="./post.html">
                <div className={s.dropdown__posts__img}>
                  <ImageComponent
                    src="/blog.jpg"
                    alt=""
                    width="258"
                    height="258"
                  />
                </div>
                <span>Is PMS Brain a Real Thing?</span>
              </a>
            </li>
            <li>
              <a href="./post.html">
                <div className={s.dropdown__posts__img}>
                  <ImageComponent
                    src="/blog.jpg"
                    alt=""
                    width="258"
                    height="258"
                  />
                </div>
                <span>Is PMS Brain a Real Thing?</span>
              </a>
            </li>
            <li>
              <a href="./post.html">
                <div className={s.dropdown__posts__img}>
                  <ImageComponent
                    src="/blog.jpg"
                    alt=""
                    width="258"
                    height="258"
                  />
                </div>
                <span>Is PMS Brain a Real Thing?</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="./category.html">
            HOME + ENTERTAINING
            <CaretDown/>
          </a>
          <span className={s.mobileOnly}>
            HOME + ENTERTAINING
            <CaretDown/>
          </span>
        </li>
        <li>
          <a href="./category.html">
            KBB
            <CaretDown/>
          </a>
          <span className={s.mobileOnly}>
            KBB
            <CaretDown/>
          </span>
        </li>
      </ul>
      <ul className={s.mobileOnly}>
        <li><a href="#">KEEP IN TOUCH</a></li>
        <li><a href="#">SHOP</a></li>
      </ul>
    </nav>
  )
}

export default MainNav