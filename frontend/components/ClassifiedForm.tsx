import React from "react";
import { createClassified, Classified } from "../api";
import { NextRouter } from "next/router";

type ClassifiedFormProps = { router: NextRouter };
type ClassifiedFormState = {
  title: string;
  body: string;
};

export class ClassifiedForm extends React.Component<
  ClassifiedFormProps,
  ClassifiedFormState
> {
  constructor(props: ClassifiedFormProps) {
    super(props);
    this.state = { title: "", body: "" };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ title: event.currentTarget.value });
  }

  handleBodyChange(event: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({ body: event.currentTarget.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createClassified(this.state).then((classified: Classified) => {
      this.props.router.push(`/classifieds/${classified.id}`);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <textarea
          name="body"
          value={this.state.body}
          onChange={this.handleBodyChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
