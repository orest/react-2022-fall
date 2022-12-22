import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppError from "../components/UI/AppError";
import Loading from "../components/UI/Loading";
import PageLayout from "../components/UI/PageLayout";

function ProductCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const categoryInput = useRef();
  const nav = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log("clicked ");
    setIsLoading(true);

    const url = "https://localhost:7007/api/ProductCategories";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCategories(data);
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  };

  const createCategory = async () => {
    const name = categoryInput.current.value;
    if (name) {
      const data = {
        categoryName: name,
        productCategoryId: 0,
      };
      const url = "https://localhost:7007/api/ProductCategories";
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (result.ok) {
        loadData();
      } else {
        //todo error
      }
    } else {
      //todo error
    }
  };

  const deleteHandler = (categoryId) => {
    nav(`/product-categories-delete/${categoryId}`);
  };

  return (
    <PageLayout>
      <div className="container">
        <div className="row">
          <div className="col">
            {!!error && <AppError errorMessage={error}></AppError>}

            <div className="card shadow mt-3">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="exampleInputText1" className="form-label">
                    Category Name
                  </label>
                  <input ref={categoryInput} type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
                  <div id="textHelp" className="form-text">
                    Please enter category Name
                  </div>
                </div>
                <div className="mb-3 text-end">
                  <button className="btn btn-primary" onClick={createCategory}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="bg-white p-3 mt-3">
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Category Id</th>
                      <th>Category Name</th>
                      <th style={{ width: 140 }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((p) => (
                      <tr key={p.productCategoryId}>
                        <td> {p.productCategoryId}</td>
                        <td> {p.categoryName}</td>
                        <td>
                          <Link to={`/product-categories-edit/${p.productCategoryId}`}>Edit</Link>
                          <button className="mx-3 btn btn-sm btn-danger" onClick={() => deleteHandler(p.productCategoryId)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </PageLayout>
  );
}

export default ProductCategoriesPage;
