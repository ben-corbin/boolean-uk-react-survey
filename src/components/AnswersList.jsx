import AnswersItem from "./AnswersItem"

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props)

  return (
    <ul>
      {props.formData.map((answerItem, i) => (
        <AnswersItem
          answerItem={answerItem}
          key={i}
          setUserData={props.setUserData}
        />
      ))}
    </ul>
  )
}
