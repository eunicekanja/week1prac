import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  array1=[
    {title:'HTML',
    desc:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. ... HTML uses "markup" to annotate text, images, and other content for display in a Web browser.'
    },
    {title:'CSS',
    desc:'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.'
    },
    {title:'JAVASCRIPT',
    desc:'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. ... It has dynamic typing, prototype-based object'
    },
    {title:'JAVA',
    desc:'Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more. Start learning Java now'
    },
    {title:'FLUTTER',
    desc:'Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase. · Fast · Productive.'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
