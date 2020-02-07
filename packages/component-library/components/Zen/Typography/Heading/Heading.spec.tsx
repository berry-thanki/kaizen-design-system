import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import { AllowedTags, HeadingLevel } from "../../types"
import { Heading } from "./index"

afterEach(cleanup)

describe("<Heading />", () => {
  it("renders the correct classes", () => {
    const headingMock = render(<Heading scale="0">Example</Heading>)
    const headingClasslist = headingMock.getByText("Example").classList

    expect(headingClasslist).toContain("heading")
    expect(headingClasslist).toContain("p-0")
    expect(headingClasslist).toContain("m-0")
    expect(headingClasslist).toContain("heading-0")
  })

  it("changes rendered HTML element when passed tag", () => {
    const headingMock = render(
      <Heading scale="0" tag="div">
        Example
      </Heading>
    )

    expect(headingMock.getByText("Example").tagName).toBe("DIV")
  })

  it("passes through aria labels and roles", () => {
    const { container } = render(
      <Heading scale="0" tag="div" role="heading" aria-level={1}>
        Example
      </Heading>
    )
    // @TODO - for some reason I can't query aria attributes :/
    // expect(
    //   headingMock.getByText("Example").querySelector('[aria-level="1"]')
    // ).toBe(true)
    expect(container).toMatchSnapshot()
  })

  describe("defaults to the correct HTML element", () => {
    type TestObject = { scale: HeadingLevel; el: keyof AllowedTags }
    const testCases: TestObject[] = [
      { scale: "0", el: "h1" },
      { scale: "1", el: "h1" },
      { scale: "2", el: "h2" },
      { scale: "3", el: "h3" },
      { scale: "4", el: "h4" },
      { scale: "5", el: "h5" },
      { scale: "6", el: "h6" },
    ]

    testCases.forEach(({ scale, el }) => {
      it(`renders the correct element for <Heading scale={${scale}} />`, function() {
        const headingMock = render(<Heading scale={scale}>Example</Heading>)
        expect(headingMock.getByText("Example").tagName.toLowerCase()).toBe(el)
      })
    })
  })
})
