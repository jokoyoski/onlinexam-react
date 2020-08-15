import React, { useEffect, useContext, useState } from "react";
import { Form, Checkbox, Pagination, Button } from "semantic-ui-react";
import { MainPage } from "./MainPage";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../store/RootStore";
import { NavLink } from "react-router-dom";

export const Question = () => {
  const category = useContext(RootStoreContext);
  const [Option, setOption] = useState(0);
  const [OptionName, setOptionName] = useState("");

  let i = 1;
  const { questionStore, commonStore } = category;
  const [activePage, setActivePage] = useState(5);

  const onChangeValue = (
    changeEvent: any,
    questionNumber: number,
    option: number,
    optionName: string
  ) => {
    questionStore.SetCurrentQuestion(questionNumber, option);
    setOption(option);
    setOptionName(optionName);
  };

  const onChange = (e: any, pageInfo: any) => {
    setActivePage(pageInfo.activePage);
    questionStore
      .returnSelectedOptionInQuestion(pageInfo.activePage)
      .then((e: number) => setOption(e));
    questionStore.SetCurrentQuestionFromPage(pageInfo.activePage);
  };

  useEffect(() => {
    console.log(questionStore.perQuestion);
  }, []);
  return (
    <MainPage>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          marginTop: "2%",
        }}
      >
        <div style={{ flexBasis: "60%" }}>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "50%", marginLeft: "2%" }}>
              <h4>{questionStore.perQuestion?.questions}</h4>
            </div>
            <div style={{ flex: "30%", marginLeft: "1em" }}>
              <Form>
                <Form.Field>
                  Selected value: {OptionName} <b></b>
                </Form.Field>

                {questionStore.perQuestion?.options.map((option) => (
                  <div key={option.optionId} className={"flex-box"}>
                    <Form.Field>
                      <Checkbox
                        onChange={(e) => {
                          onChangeValue(
                            e,
                            questionStore.perQuestion!.QuestionNumber,
                            option.optionId,
                            option.optionName
                          );
                        }}
                        radio
                        label={option.optionName}
                        name="checkboxRadioGroup"
                        value={option.optionId}
                        checked={option.optionId == Option}
                      />
                    </Form.Field>
                  </div>
                ))}
              </Form>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "4%",
            marginTop: "30%",
          }}
        >
          <Button
            as={NavLink}
            exact
            to="/scores"
            position="right"
            name="About us"
            positive
          >
            Submit
          </Button>
        </div>
        <div style={{ flexBasis: "40%", marginTop: "0%", textAlign: "center" }}>
          <Pagination
            defaultActivePage={9}
            onPageChange={onChange}
            totalPages={
              questionStore.questionList?.questionsCollections.length!
            }
          />
        </div>
      </div>
    </MainPage>
  );
};
export default observer(Question);
