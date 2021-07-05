import { generateUuid } from "../../Common/Helpers";
import { ITodo } from "./types";

export const mockTodos: ITodo[] = [
  {
    id: generateUuid(),
    status: "OPEN",
    creationDate: new Date().toString(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget neque, libero, massa morbi aliquam ornare. Et tristique sit faucibus suspendisse massa sit turpis vitae. Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. Porttitor amet erat scelerisque aenean enim tortor, gravida quisque. Egestas dui non commodo phasellus nibh volutpat nulla in. ",
    title: "Create Sign In validation",
  },
  {
    id: generateUuid(),
    status: "OPEN",
    creationDate: new Date().toString(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget neque, libero, massa morbi aliquam ornare. Et tristique sit faucibus suspendisse massa sit turpis vitae. Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. Porttitor amet erat scelerisque aenean enim tortor, gravida quisque. Egestas dui non commodo phasellus nibh volutpat nulla in. ",
    title: "Implement validations",
  },
  {
    id: generateUuid(),
    status: "CLOSED",
    creationDate: new Date().toString(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget neque, libero, massa morbi aliquam ornare. Et tristique sit faucibus suspendisse massa sit turpis vitae. Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. Porttitor amet erat scelerisque aenean enim tortor, gravida quisque. Egestas dui non commodo phasellus nibh volutpat nulla in. ",
    title: "Align with team X",
  },
  {
    id: generateUuid(),
    status: "OPEN",
    creationDate: new Date().toString(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget neque, libero, massa morbi aliquam ornare. Et tristique sit faucibus suspendisse massa sit turpis vitae. Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. Porttitor amet erat scelerisque aenean enim tortor, gravida quisque. Egestas dui non commodo phasellus nibh volutpat nulla in. ",
    title: "Discuss new feature",
  },
  {
    id: generateUuid(),
    status: "OPEN",
    creationDate: new Date().toString(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget neque, libero, massa morbi aliquam ornare. Et tristique sit faucibus suspendisse massa sit turpis vitae. Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. Porttitor amet erat scelerisque aenean enim tortor, gravida quisque. Egestas dui non commodo phasellus nibh volutpat nulla in. ",
    title: "Another subject",
  },
];
