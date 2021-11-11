import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import FormCoding from "./FormCoding";

describe("FormPage", () => {
  test("renders Form component", () => {
    render(<FormCoding />);
    // screen.debug();
    expect(
      screen.getByText(/Pendaftaran Peserta Coding Bootcamp/)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone/)).toBeInTheDocument();
    expect(screen.getByText(/Submit/)).toBeInTheDocument();
  });

  test("input text for name and email with false value", () => {
    render(<FormCoding />);
    // screen.debug();

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Faiz123" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "email testing" },
    });

    expect(
      screen.getByText("Nama Lengkap Harus Berupa Huruf")
    ).toBeInTheDocument();
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama/)).toHaveValue("Faiz123");
    expect(screen.getByLabelText(/Email/)).toHaveValue("email testing");
  });

  test("input text for ideal value", () => {
    render(<FormCoding />);
    // screen.debug();

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Faiz" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "Faiz@mail.com" },
    });

    expect(screen.getByLabelText(/Nama/)).toHaveValue("Faiz");
    expect(screen.getByLabelText(/Email/)).toHaveValue("Faiz@mail.com");
  });

  test("submit button with error", () => {
    render(<FormCoding />);
    // screen.debug();
    jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Faiz" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "emailtesting.com" },
    });

    fireEvent.submit(screen.getByText("Submit"));

    expect(window.alert).toBeCalledWith("Data Pendaftar Tidak Sesuai");
    expect(screen.getByLabelText(/Nama/)).toHaveValue("Faiz");
    expect(screen.getByLabelText(/Email/)).toHaveValue("emailtesting.com");
  });
});
