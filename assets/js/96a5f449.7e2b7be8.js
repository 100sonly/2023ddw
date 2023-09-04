"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[3261],{7393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905)),l=(n(1694),n(3707),n(6533),n(505));const r={sidebar_position:3},o="Forms",s={unversionedId:"advanced/forms",id:"advanced/forms",title:"Forms",description:"Flask has an extension that makes it easy to create web forms. WTForms is \u201ca flexible forms validation and rendering library for Python Web development.\u201d With Flask-WTF, we get WTForms in Flask. WTForms includes security features for submitting form data and submission validation techniques.",source:"@site/projects/advanced/forms.md",sourceDirName:"advanced",slug:"/advanced/forms",permalink:"/2023hong/projects/advanced/forms",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Bootstrap",permalink:"/2023hong/projects/advanced/bootstrap"},next:{title:"Checkoff",permalink:"/2023hong/projects/checkoff"}},m={},d=[{value:"Pre-Requisite",id:"pre-requisite",level:3},{value:"Imports",id:"imports",level:2},{value:"Creating FlaskForm",id:"creating-flaskform",level:2},{value:"Rendering Web Form",id:"rendering-web-form",level:2},{value:"Hidden Fields",id:"hidden-fields",level:2},{value:"References",id:"references",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forms"},"Forms"),(0,a.kt)("p",null,"Flask has an extension that makes it easy to create web forms. WTForms is \u201ca flexible forms validation and rendering library for Python Web development.\u201d With Flask-WTF, we get WTForms in Flask. WTForms includes security features for submitting form data and submission validation techniques."),(0,a.kt)(l.Z,{mdxType:"ChatBaseBubble"}),(0,a.kt)("h3",{id:"pre-requisite"},"Pre-Requisite"),(0,a.kt)("p",null,"You need to go through the following tutorial before reading the notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-iii-web-forms"},"The Flask Mega-Tutorial Part III: Web Forms"))),(0,a.kt)("p",null,"This notes will only provide brief description specific to the mini project 2."),(0,a.kt)("h2",{id:"imports"},"Imports"),(0,a.kt)("p",null,"To use webforms, we need to import ",(0,a.kt)("inlineCode",{parentName:"p"},"FlaskForm")," as well as the different input fields. This is what is done at the top few lines of ",(0,a.kt)("inlineCode",{parentName:"p"},"app/forms.py"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from flask_wtf import FlaskForm\nfrom wtforms import StringField, PasswordField, BooleanField, SubmitField, SelectMultipleField, IntegerField, HiddenField\nfrom wtforms.validators import DataRequired, ValidationError, EqualTo\n")),(0,a.kt)("h2",{id:"creating-flaskform"},"Creating FlaskForm"),(0,a.kt)("p",null,"To create a webform, we need to define a class of ",(0,a.kt)("inlineCode",{parentName:"p"},"FlaskForm")," instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class CreateQuestionForm(FlaskForm):\n    expression = StringField('Math Expression',\n                             validators=[DataRequired()])\n    assign_to = SelectMultipleField('Send To',\n                                    validators=[DataRequired()])\n    submit = SubmitField('Submit')\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In this form to create questions, we have one input field ",(0,a.kt)("inlineCode",{parentName:"li"},"expression")," which expects a ",(0,a.kt)("inlineCode",{parentName:"li"},"String"),". The label of this input field is 'Math Expression'. We can specify ",(0,a.kt)("inlineCode",{parentName:"li"},"validators")," for Python to check the validity of the input data."),(0,a.kt)("li",{parentName:"ul"},"The field ",(0,a.kt)("inlineCode",{parentName:"li"},"assign_to")," is a ",(0,a.kt)("inlineCode",{parentName:"li"},"SelectMultipleField")," which allows multiple select of users to assign the challenge to."),(0,a.kt)("li",{parentName:"ul"},"The last field is ",(0,a.kt)("inlineCode",{parentName:"li"},"submit")," which is a Submit button with a label 'Submit'.")),(0,a.kt)("h2",{id:"rendering-web-form"},"Rendering Web Form"),(0,a.kt)("p",null,"When using Bootstrap's Forms, we can render the form as shown inside ",(0,a.kt)("inlineCode",{parentName:"p"},"app/templates/questions.html"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'{% import "bootstrap/wtf.html" as wtf %} ...\n<div class="row">\n  <div class="col-md-4">{{ wtf.quick_form(form)}}</div>\n</div>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, we have to import ",(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap/wtf.html"),"."),(0,a.kt)("li",{parentName:"ul"},"Next, we can use ",(0,a.kt)("inlineCode",{parentName:"li"},"{{ wtf.quick_form(form) }}"),".")),(0,a.kt)("p",null,"The argument inside ",(0,a.kt)("inlineCode",{parentName:"p"},"wtf.quick_form()")," is a variable that is passed on when rendering the template. This can be found inside ",(0,a.kt)("inlineCode",{parentName:"p"},"app/routes.py")," under the function definition for ",(0,a.kt)("inlineCode",{parentName:"p"},"questions()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def questions():\n    ...\n    form = CreateQuestionForm()\n    ...\n    return render_template('questions.html',\n                           title='Questions',\n                            user=current_user,\n                            questions=questions,\n                            form=form)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We must first create the ",(0,a.kt)("inlineCode",{parentName:"li"},"form")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"CreateQuestionForm")," object instance which is imported from ",(0,a.kt)("inlineCode",{parentName:"li"},"app/forms.py"),"."),(0,a.kt)("li",{parentName:"ul"},"In the last line and last argument of ",(0,a.kt)("inlineCode",{parentName:"li"},"render_template()"),", we have ",(0,a.kt)("inlineCode",{parentName:"li"},"form=form")," where we pass on the ",(0,a.kt)("inlineCode",{parentName:"li"},"CreateQuestionForm")," object instance that we create previously into the a keyword argument called ",(0,a.kt)("inlineCode",{parentName:"li"},"form"),". This name ",(0,a.kt)("inlineCode",{parentName:"li"},"form")," (the left hand side of the equal sign) is the one that is accessible inside ",(0,a.kt)("inlineCode",{parentName:"li"},"questions.html")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"wtf.quick_form(form)"),".")),(0,a.kt)("h2",{id:"hidden-fields"},"Hidden Fields"),(0,a.kt)("p",null,"Another example of form is used in ",(0,a.kt)("inlineCode",{parentName:"p"},"ChallengeAnswerForm")," where a user submit an answer from ",(0,a.kt)("inlineCode",{parentName:"p"},"challenge.html")," page. Inside ",(0,a.kt)("inlineCode",{parentName:"p"},"app/forms.py")," we see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class ChallengeAnswerForm(FlaskForm):\n    challenge_id = HiddenField('Challenge ID')\n    answer = StringField('Answer', validators=[DataRequired()])\n    elapsed_time = HiddenField('Elapsed Time')\n    submit = SubmitField('Submit')\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The only input field here are ",(0,a.kt)("inlineCode",{parentName:"li"},"answer")," which is a ",(0,a.kt)("inlineCode",{parentName:"li"},"StringField")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"submit")," which is ",(0,a.kt)("inlineCode",{parentName:"li"},"SubmitField")," button."),(0,a.kt)("li",{parentName:"ul"},"Both ",(0,a.kt)("inlineCode",{parentName:"li"},"challenge_id")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"elapsed_time")," are ",(0,a.kt)("inlineCode",{parentName:"li"},"HiddenField")," because these two will be generated by the script rather than entered by the user.")),(0,a.kt)("p",null,'When a user click the "Show/Hide" button to reveal the question, a callback is executed in ',(0,a.kt)("inlineCode",{parentName:"p"},"clientlibrary.js"),". Recall that we produced ",(0,a.kt)("inlineCode",{parentName:"p"},"clientlibrary.js")," using Transcrypt by compiling the Python's script ",(0,a.kt)("inlineCode",{parentName:"p"},"clientlibrary.py"),'. Everytime the "Show/Hide" button is clicked, it calls ',(0,a.kt)("inlineCode",{parentName:"p"},"start_time(question_id)")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Records:\n    def __init__(self):\n        self.items = {}\n\n    def start_timer(self, question_id):\n        self.items[question_id] = AnswerTime(question_id)\n")),(0,a.kt)("p",null,'When the user click the "Submit" button, it will call the ',(0,a.kt)("inlineCode",{parentName:"p"},"stop_timer(form_id, question_id)")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'    def stop_timer(self, form_id, question_id):\n        self.items[question_id].stop()\n        curform = document.getElementById(f"form-{form_id:}")\n        answer = curform.elements["answer"].value\n        curform.elements["challenge_id"].value = str(question_id)\n        curform.elements["elapsed_time"].value = self.items[question_id].elapsedtime\n        curform.submit()\n')),(0,a.kt)("p",null,"This function stop the timer and obtain data the ",(0,a.kt)("inlineCode",{parentName:"p"},"answer")," input text box. The function then fills in the value of the two ",(0,a.kt)("inlineCode",{parentName:"p"},"HiddenField"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"challenge_id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"elapsed_time"),". Then the function submit the form to the server."),(0,a.kt)("p",null,"The way this form is implemented in ",(0,a.kt)("inlineCode",{parentName:"p"},"templates/challenges.html")," is shown in the code below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form id="form-{{ idx }}" action="" method="post" novalidate>\n          {{ form.hidden_tag() }}\n          <div>\n          {{ form.answer(size=32) }}\n          <button type="button" class="btn btn-primary"\n            onclick="library.records.stop_timer({{ idx }}, {{ challenges[idx].id }})">Submit</button>\n        </form>\n')),(0,a.kt)("p",null,"Notice that we only implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"answer")," field with ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ form.answer() }}"),". Next, we create a button and bind the ",(0,a.kt)("inlineCode",{parentName:"p"},"onclick")," event to our ",(0,a.kt)("inlineCode",{parentName:"p"},"stop_timer()")," function inside our ",(0,a.kt)("inlineCode",{parentName:"p"},"clientlibrary.js")," script."),(0,a.kt)("p",null,"Notice that we have renamed our ",(0,a.kt)("inlineCode",{parentName:"p"},"clientlibrary.js")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"library")," in our ",(0,a.kt)("inlineCode",{parentName:"p"},"templates/base.html"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module">\n  import * as library from "/static/__target__/clientlibrary.js";\n  window.library = library;\n<\/script>\n')),(0,a.kt)("p",null,"Moreover, inside our ",(0,a.kt)("inlineCode",{parentName:"p"},"clientlibrary.py")," we create an object called ",(0,a.kt)("inlineCode",{parentName:"p"},"records"),". You can find in the last line the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"records = Records()\n")),(0,a.kt)("p",null,"With this, we can call the method inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Records")," class using ",(0,a.kt)("inlineCode",{parentName:"p"},"library.records.stop_timer()"),"."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-ii-templates"},"The Flask Mega-Tutorial Part II: Templates")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-iii-web-forms"},"The Flask Mega-Tutorial Part III: Web Forms")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://transcrypt.org/documentation"},"Transcrypt Documentation"))))}c.isMDXComponent=!0}}]);