import React, { useEffect, useContext } from "react";
import { Card, Container, Button } from "semantic-ui-react";
import { MainPage } from "./MainPage";
import { RootStoreContext } from "../store/RootStore";
import { LoadingComponent } from "../common/LoadingCmponent";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";

//const promise = new Promise(function(resolve, reject) {
// the function is executed automatically when the promise is constructed

// after 1 second signal that the job is done with the result "done"
//  setTimeout(() => reject("done"), 1000);
//});
const Category: React.FC<RouteComponentProps> = ({ history }) => {
  const category = useContext(RootStoreContext);
  const { questionStore, commonStore } = category;
  useEffect(() => {
   
    if (!commonStore.token) {
      history.push("/");
    }
    questionStore.getCategory().then((category: any) => {
      console.log(category);
    });
    // promise.then((e)=>(console.log(e))catch((e)=>console.log("error",e))
  },[]);
  if (questionStore.loadingCategories)
    return <LoadingComponent content="Loading Categories..." />;
  return (
    <Container fluid>
      <MainPage>
        <div className={"flex-card"}>
          {questionStore.categories.map((category) => (
            <div key={category.categoryId} className={"flex-box"}>
              <Card
                image={category.photoUrl}
                header={category.categoryName}
                description={category.categoryDescription}
              />
              <Button
                 loading={questionStore.loadQuestion && questionStore.target===category.categoryId }
                onClick={(e:any) => {
                  questionStore.getQuestion(category.categoryId, 72);
                }}
                positive
              >
                Positive Button
              </Button>
            </div>
          ))}
        </div>
      </MainPage>
    </Container>
  );
};

export default observer(Category);
