const questions: {  id: number,  title: string,  answerOptions: string[],  ans: number,  background: string[],  color: string[]}[] = [
    {
      id: 0,
      title: "Which of the following JavaScript cannot do?",
      answerOptions: [
        "JavaScript can react to events", "JavaScript can manipulate HTML elements",  "JavaScript can be use to validate data", "All of the Above"],
        ans: 3,
        background: ["#252D4A", "#252D4A", "#252D4A", "#252D4A",],
        color: ['white', 'white', 'white', 'white']
    },
    {
      id: 1,
      title:  "Whats so great about XML?",
      answerOptions: [
        "Easy data exchange", "High speed on network", "Only B.is correct", "Both A & B"],
        ans: 3,
        background: ["#252D4A", "#252D4A", "#252D4A", "#252D4A",],
        color: ['white', 'white', 'white', 'white']
    },
    {
      id: 2,
      title: "The attribute used to define a new namespace is.",
      answerOptions: [
        "XMLNS", "XmlNameSpace", "Xmlns", "XmlNs"],
        ans: 2,
        background: ["#252D4A", "#252D4A", "#252D4A", "#252D4A",],
        color: ['white', 'white', 'white', 'white']
    },
    {
      id: 3,
      title: "Which tag(s) can handle mouse events in Netscape?",
      answerOptions: [
        "<IMG>", "<A>", "<BR>", "None of the Above"],
        ans: 1,
        background: ["#252D4A", "#252D4A", "#252D4A", "#252D4A",],
        color: ['white', 'white', 'white', 'white']
    },
  ];

  export default questions;