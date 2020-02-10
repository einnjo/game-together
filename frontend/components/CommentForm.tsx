import React from "react";
import { NextRouter } from "next/router";
import { commentOnClassified, Classified } from "../api";

type CommentFormProps = { classifiedId: string; router: NextRouter };
type CommentFormState = {
  body: string;
};

export class CommentForm extends React.Component<
  CommentFormProps,
  CommentFormState
> {
  constructor(props: CommentFormProps) {
    super(props);
    this.state = { body: "" };

    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBodyChange(event: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({ body: event.currentTarget.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    commentOnClassified({
      classifiedId: this.props.classifiedId,
      comment: this.state.body
    }).then(() => {
      this.props.router.push(`/classifieds/${this.props.classifiedId}`);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="body">Comment</label>
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
