const express = require('express')

const quizzes = [{userid: 1, quiz: {test: "testquiz 1"}},
    {userid: 2, quiz: {test: "testquiz 2"}},
    {userid: 3, quiz: {test: "testquiz 3"}}]

const fetchQuiz = function(userid){
    for (quiz of quizzes) {
        if (userid == quiz.userid){
            return quiz.quiz
        }
    }
}

module.exports = fetchQuiz