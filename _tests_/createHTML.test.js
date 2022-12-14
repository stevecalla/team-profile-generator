const fs = require("fs");
const { createHTML, writeToFile } = require("../dist/js/createHTML");
const Manager = require("../lib/Manager.js");
const WriteHTML = require("../dist/js/WriteHTML.js");

jest.mock("fs");

describe("Create HTML", () => {
  it("should create html string containing manager class details", () => {
    let teamMembers = [];

    const manager = new Manager(
      "Steve",
      "Calla",
      1,
      "callasteven@gmail.com",
      10
    );

    teamMembers.push(manager);

    expect(createHTML(teamMembers)).toEqual(
      `
        <div class="employee">
          <div class="titles">
            <p>${member.getName()}</p>
            <p><i class="fas fa-mug-hot"></i> ${member.getRole()}</p>
          </div>
          <div class="employee-details">
            <p class="list-items">ID: ${member.getId()}</p>
            <p class="list-items">EMAIL:&nbsp;<a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
            <p class="list-items">OFFICE #: 10</p>
          </div>
        </div>`
    );
  });
});

describe("Write HTML", () => {
  it("should call fs.writeFile with the passed in 'path' and 'data' arguments", () => {
    const writeHTML = new WriteHTML();

    fs.writeFileSync.mockReturnValue("");

    expect(writeHTML.write("./index-draft.hmtl", "")).toEqual("");
  });
});
