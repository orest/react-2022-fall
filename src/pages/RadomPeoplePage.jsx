import { useState } from "react";
import Loading from "../components/UI/Loading";
import PageLayout from "../components/UI/PageLayout";

function RadomPeoplePage() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //let people = [];

  const loadRandomPeople = () => {
    console.log("clicked ");
    const url = "https://randomuser.me/api/?results=5";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPeople(data.results);
        console.log(people);
      });
  };

  const loadRandomPeople2 = async () => {
    console.log("clicked ");
    setIsLoading(true);
    const url = "https://randomuser.me/api/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    setPeople(data.results);
    setIsLoading(false);
  };

  return (
    <PageLayout>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="bg-white p-3 mt-3">
              <button className="btn btn-primary" onClick={loadRandomPeople2} type="button">
                Load People
              </button>

              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {people.map((p) => (
                      <tr key={p.email}>
                        <td>
                          <img src={p.picture.thumbnail} />
                        </td>
                        <td>
                          {p.name.first} {p.name.last}
                        </td>
                        <td>{p.email}</td>
                        <td>{p.location.city}</td>
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

export default RadomPeoplePage;
