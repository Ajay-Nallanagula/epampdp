Problem Statement:
Part - 1
1. product listing page(Name, price, image, add to cart button)
2. product view page
3. select product variant
4. add to cart(icon on home page)
------------------
Part - 2
5. cart view
(Expected: Using ReactJs, Typescript, unit tests)

@Ramesh Allu
Task#1:
Catalog / Product Listing -> PDP -> Cart Page
DoD:
Functional user journey
~100% Test coverage
Scope:
 Styling is optional
For products data, use a mock json file with real products from say Atta, Sunflower oil categories


 <article id="productItem">
      <figure>
        <img src="pic_trulli.jpg" alt="Trulli"></img>
        <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
      </figure>
      <section>
        <div>{brandName}</div>
        <div>{desc}</div>
      </section>
      <section>
        <select>
          <option value="1" key="1">
            Test 1
          </option>
          <option value="2" key="2">
            Test 2
          </option>
          <option value="3" key="3">
            Test 3
          </option>
        </select>
      </section>
      <section>
        <div>Rs1000.00</div>
      </section>
      <section>
        <input type="number" id="quantity" name="quantity" min="1" max="100" />
      </section>
    </article>