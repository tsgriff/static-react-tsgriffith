---
layout: blog
title: 'Data Binding Comparison: Two-Way (Angular) and One-Way (React)'
date: 2018-03-06T03:36:35.740Z
categories:
  - Angular
  - React
  - frontend development
tags:
  - data-binding
  - angular
  - react
---
Data binding is a term for the connection of data between a user's input and how the application receives and displays this data. As I'm learning Angular, I'm reminded of two-way data binding and I thought it'd be interesting to examine how it differs from one-way data binding.

&nbsp;

<h2 style="font-weight: bold">Angular</h2>

&nbsp;

One of the assignments of my Udemy Angular course was simple data-binding with an input element, like so:

&nbsp;

![null](/uploads/angular-data-binding.png)

&nbsp;

Now let's look at solutions for one-way and two-way binding.

&nbsp;

<h2 style="font-weight: bold">One-way binding</h2>:

&nbsp;

Component Class (typescript file)

<code>
  username: string = '';
  handleInput(event: Event) {
   this.username = (<HTMLInputElement>event.target).value;
  }
</code>

&nbsp;

Component Template (HTML file)

<code>
	<input 
	  type="text" 
	  (input)="handleInput($event)"
	/>
	<p>{{ username }}</p>
</code>

&nbsp;

<h2 style="font-weight: bold">Two-way binding</h2>:

&nbsp;

Component Class (typescript file)

Nothing needed.

&nbsp;

Component Template (HTML file)

<code>
	<input 
	  type="text" 
	  \[(ngModel)]="username"
	/>
	<p>{{ username }}</p>
</code>

&nbsp;

Given this example, you can see how two-way binding simplifies the code. The data is handled in the template rather than through an event handler in the component class. This is a combination of event binding and property binding through the use of \[(ngModel)], an Angular directive. Input is the bound event and "username" is the bound property. This is used instead of (input)="username," which would be handled in the component class file.

&nbsp;

<h2 style="font-weight: bold">React</h2>

&nbsp;

React uses one-way data binding (or, one-way data flow) to keep things "modular and fast" (https://reactjs.org/docs/thinking-in-react.html). This is a top-down data flow approach where data is meant to be handled within the model before the user interface (UI), instead of in Angular where the data can be handled in the  UI before the model. The user inputs data which is stored in the component's state (similar to Angular's component class as the model), which then is handled in the way the developer sees fit. Here's sample code from React that achieves the same effect as the Angular example above:

&nbsp;

![null](/uploads/react-data-binding.png)

&nbsp;

Component (JS file)

I'll post the whole file (since it's small and is focused on this example only) and walk through what's happening.

<code>
class App extends Component {
  constructor(props) {
    super(props);
     this.state = { 

\    username: ""

\    }

this.handleUsername = this.handleUsername.bind(this);
	  }
  handleUsername(event) {
    this.setState({
   username: event.target.value
    })
  }
  render() {
    return (
    <div className="App">
    <input onChange={this.handleUsername} />
    <p>{this.state.username}</p>
    </div>
   );
	  }
	}
</code>

&nbsp;

The input element has an event handler that detects for any change in user input ("handleUsername"), this is then passed to username in the component's state which is updated as soon as something in the input changes, the updated state is then rendered in JSX through {this.state.username}. This allows the developer to handle this input in whatever way necessary before that data is displayed.

&nbsp;

<h2 style="font-weight: bold">Is two-way binding better than one-way?</h2>

&nbsp;

Of course, this question can't be answered with a simple yes or no. It of course depends on scope and use case. According to Eric Greene in "Two-Way Data Binding: Angular 2 and React," one-way data binding adds extra work for the developer in trivial UI  use cases (such as the one that I presented). As a result, two-way binding is most useful for these simple cases whereas React overcomplicates it in the form of setting state and re-rendering the component. However, in more complex, larger data exchanges across multiple components, one-way binding is favorable in order to avoid complications of allowing two sources of data on a larger, cross-component scope (https://www.accelebrate.com/blog/two-way-data-binding-angular-2-and-react/).

&nbsp;

I know that this is just the tip of the iceberg, so I plan on diving into this issue more and will post updates on the usefulness of each.
