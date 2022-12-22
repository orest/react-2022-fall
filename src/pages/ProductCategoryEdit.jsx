import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/UI/Loading";
import PageLayout from "../components/UI/PageLayout";

function ProductCategoryEdit() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const { id } = useParams();
  const baseApiUrl = "https://localhost:7007/api";
  console.log(id);
  const nav = useNavigate();
  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const url = `${baseApiUrl}/ProductCategories/${id}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      setCategoryName(data.categoryName);
      console.log(data);
    } catch (e) {
      debugger;
      setError(e.message);
    }
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(categoryName);

    const name = categoryName;
    if (name) {
      setIsLoading(true);
      const data = {
        categoryName: name,
        productCategoryId: id,
      };
      const url = `${baseApiUrl}/ProductCategories/${id}`;
      const result = await fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setIsLoading(false);
      if (result.ok) {
        nav("/product-categories");
      } else {
        setError();
      }
    } else {
      setError("Please provide valid category name");
    }
  };

  return (
    <PageLayout>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Edit</h5>
                <form onSubmit={onFormSubmit}>
                  <div>
                    <div className="mb-3">
                      <label htmlFor="categoryName" className="form-label">
                        Category Name
                      </label>
                      <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} className="form-control" id="categoryName" aria-describedby="textHelp" />
                    </div>
                    <div>
                      <button className="btn btn-primary" type="submit">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </PageLayout>
  );
}

export default ProductCategoryEdit;
