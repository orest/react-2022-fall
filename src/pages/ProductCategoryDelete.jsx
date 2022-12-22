import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/UI/Loading";
import PageLayout from "../components/UI/PageLayout";

function ProductCategoryDelete() {
  const [error, setError] = useState();
  const [category, setCategory] = useState();
  const { id } = useParams();
  const nav = useNavigate();
  const baseApiUrl = "https://localhost:7007/api";
  console.log(id);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const url = `${baseApiUrl}/ProductCategories/${id}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCategory(data);
    } catch (e) {
      debugger;
      setError(e.message);
    }
  };


  const deleteHandler= async()=>{
    const url = `${baseApiUrl}/ProductCategories/${id}`;
      const result = await fetch(url, {
        method: "DELETE" 
      });

      if(result.ok){
        nav("/product-categories")
      }
      
  }

  return (
    <PageLayout>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-danger">Delete</h5>
                <div className="alert alert-danger text-center">
                  <h3>Are you sure you want to delete this category </h3>
                  {!!category && <h2>{category.categoryName}</h2>}

                  <button className="btn btn-light w-25  btn-lg me-3" onClick={() => nav("/product-categories")}>
                    NO
                  </button>
                  <button className="btn btn-danger btn-lg w-25  " onClick={deleteHandler}>YES</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ProductCategoryDelete;
