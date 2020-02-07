import { storiesOf } from "@storybook/react"
import * as React from "react"
import Box from "../components/Zen/Box"
import { Heading, Link, Paragraph, Pre } from "../components/Zen/Typography"

// @TODO - container-based sizing
// Explore the idea of a container that passes container widths
// look at empty state component

// @TODO - problems with people using the wrapper, then
// undelying styles breaking

// @TODO - link in react-router, does it appear differently as a child in paragraph?
// name collisions and confusion around Kaizen link and RR link
storiesOf("Kaizen", module)
  .add("Heading 0", () => (
    <Heading tag="h1" level="0">
      This is an example Heading
    </Heading>
  ))
  .add("Heading 1", () => (
    <Heading level="1" m="0">
      This is an example Heading
    </Heading>
  ))
  .add("Heading 2", () => (
    <Heading level="2">This is an example Heading</Heading>
  ))
  .add("Heading 3", () => (
    <Heading level="3">This is an example Heading</Heading>
  ))
  .add("Heading 4", () => (
    <Heading level="4">This is an example Heading</Heading>
  ))
  .add("Heading 5", () => (
    <Heading level="5">This is an example Heading</Heading>
  ))
  .add("Heading 6", () => (
    <Heading level="6">This is an example Heading</Heading>
  ))
  .add("Heading 1 - Responsive margin", () => (
    <Heading level="1" m={{ mobile: "2", desktop: "4" }}>
      This is an example Heading
    </Heading>
  ))
  .add("Paragraph xs", () => (
    <Paragraph scale="xs">
      This is an extra small example Paragraph. Lorem ipsum dolor sit amet
      consectetur <Link href="#">adipisicing elit</Link>. Illo libero accusamus
      quo, officia voluptates necessitatibus. Ut porro consectetur veniam quo
      sunt quidem inventore at, velit possimus eligendi ipsa sed quas!
    </Paragraph>
  ))
  .add("paragraph sm", () => (
    <Paragraph scale="sm">
      This is a small example Paragraph. Lorem ipsum dolor sit amet consectetur{" "}
      <Link href="#">adipisicing elit</Link>. Sit explicabo saepe consequuntur
      magnam eaque blanditiis nemo esse voluptate ex debitis harum,
      reprehenderit pariatur repudiandae? Cupiditate, delectus. Ipsum ex animi
      maiores.
    </Paragraph>
  ))
  .add("paragraph md", () => (
    <Paragraph scale="md">
      This is a medium (aka regular, aka default) example Paragraph. Lorem ipsum
      dolor sit amet consectetur <Link>adipisicing elit</Link>. Facilis
      accusantium ullam quaerat voluptate nihil blanditiis, distinctio magni
      officia, ex repudiandae necessitatibus qui, deserunt maiores tempore
      veniam? Culpa explicabo dolorem cumque?
    </Paragraph>
  ))
  .add("paragraph lg", () => (
    <Paragraph scale="lg">
      This is an large example Paragraph. Lorem ipsum dolor sit amet consectetur{" "}
      <Link>adipisicing elit</Link>. Aut, non vero suscipit odio culpa quaerat
      distinctio perspiciatis consequatur repellendus nulla eaque voluptates
      accusantium facilis exercitationem! Earum deserunt voluptatem corporis
      expedita?
    </Paragraph>
  ))
  .add("Paragraph with a link", () => (
    <>
      <Paragraph tag="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facere
        assumenda libero impedit{" "}
        <Link href="">reprehenderit nemo voluptates</Link> enim officiis
        reiciendis, a voluptatibus harum. Quis dolorum natus tempora quidem
        voluptate eum modi. This is an example Paragraph, now featuring{" "}
      </Paragraph>
      <Paragraph tag="p">
        They can also include <strong>bold text</strong> or <i>italics</i>{" "}
        without extra work
      </Paragraph>
    </>
  ))
  .add("responsive typography", () => (
    <Paragraph scale={{ mobile: "xs", tablet: "md", desktop: "lg" }}>
      Paragraphs can also be responsive. This is an large example Paragraph.
      Lorem ipsum dolor sit amet consectetur <Link>adipisicing elit</Link>. Aut,
      non vero suscipit odio culpa quaerat distinctio perspiciatis consequatur
      repellendus nulla eaque voluptates accusantium facilis exercitationem!
      Earum deserunt voluptatem corporis expedita?
    </Paragraph>
  ))
  .add("paragraph with spacing", () => (
    <Paragraph p="1/8">
      Paragraphs can also be responsive. This is an large example Paragraph.
      Lorem ipsum dolor sit amet consectetur <Link>adipisicing elit</Link>. Aut,
      non vero suscipit odio culpa quaerat distinctio perspiciatis consequatur
      repellendus nulla eaque voluptates accusantium facilis exercitationem!
      Earum deserunt voluptatem corporis expedita?
    </Paragraph>
  ))
  .add("paragraph with x spacing", () => (
    <Paragraph px="1">
      Paragraphs can also be responsive. This is an large example Paragraph.
      Lorem ipsum dolor sit amet consectetur <Link>adipisicing elit</Link>. Aut,
      non vero suscipit odio culpa quaerat distinctio perspiciatis consequatur
      repellendus nulla eaque voluptates accusantium facilis exercitationem!
      Earum deserunt voluptatem corporis expedita?
    </Paragraph>
  ))
  .add("paragraph with RESPONSIVE spacing", () => (
    <Paragraph p={{ mobile: "1/8", tablet: "1/2", desktop: "2" }}>
      Paragraphs can also be responsive. This is an large example Paragraph.
      Lorem ipsum dolor sit amet consectetur <Link>adipisicing elit</Link>. Aut,
      non vero suscipit odio culpa quaerat distinctio perspiciatis consequatur
      repellendus nulla eaque voluptates accusantium facilis exercitationem!
      Earum deserunt voluptatem corporis expedita?
    </Paragraph>
  ))
  .add("paragraph with RESPONSIVE margin", () => (
    <>
      <Paragraph m={{ mobile: "1/8", tablet: "1/2", desktop: "2" }}>
        Paragraphs can also be responsive. This is an large example Paragraph.
        Lorem ipsum dolor sit amet consectetur <Link>adipisicing elit</Link>.
        Aut, non vero suscipit odio culpa quaerat distinctio perspiciatis
        consequatur repellendus nulla eaque voluptates accusantium facilis
        exercitationem! Earum deserunt voluptatem corporis expedita?
      </Paragraph>
      <Paragraph m="1/2" p="0">
        Paragraphs can also be responsive. This is an large example Paragraph.
        Lorem ipsum dolor sit amet consectetur <Link>adipisicing elit</Link>.
        Aut, non vero suscipit odio culpa quaerat distinctio perspiciatis
        consequatur repellendus nulla eaque voluptates accusantium facilis
        exercitationem! Earum deserunt voluptatem corporis expedita?
      </Paragraph>
    </>
  ))
  .add("nested paragraphs", () => (
    <Paragraph scale="lg">
      Paragraphs can also be responsive. This is an large example Paragraph.
      Lorem ipsum dolor sit amet consectetur Aut, non vero suscipit odio culpa
      quaerat distinctio perspiciatis consequatur repellendus nulla eaque
      voluptates accusantium facilis \exercitationem! Earum deserunt voluptatem
      corporis expedita?
      <Paragraph scale="md">
        Paragraphs can also be responsive. This is an large example Paragraph.
        Lorem ipsum dolor sit amet consectetur Aut, non vero suscipit odio culpa
        quaerat distinctio perspiciatis consequatur repellendus nulla eaque
        voluptates accusantium facilis exercitationem! Earum deserunt voluptatem
        corporis expedita?
        <Paragraph scale="sm">
          Paragraphs can also be responsive. This is an large example Paragraph.
          Lorem ipsum dolor sit amet consectetur Aut, non vero suscipit odio
          culpa quaerat distinctio perspiciatis consequatur repellendus nulla
          eaque voluptates accusantium facilis exercitationem! Earum deserunt
          voluptatem corporis expedita?
        </Paragraph>
      </Paragraph>
    </Paragraph>
  ))
  .add("Link", () => <Link href="">reprehenderit nemo voluptates</Link>)
  .add("Link within a paragraph", () => (
    <Paragraph>
      <Link href="">reprehenderit nemo voluptates</Link>
    </Paragraph>
  ))
  .add("Box", () => (
    <Box m="2" p="2">
      <Paragraph scale="sm">
        Paragraphs can also be responsive. This is an large example Paragraph.
        Lorem ipsum dolor sit{" "}
        <strong>amet consectetur Aut, non vero suscipit odio </strong>culpa
        quaerat distinctio perspiciatis consequatur repellendus nulla eaque
        voluptates accusantium facilis exercitationem! Earum deserunt voluptatem
        corporis expedita?
      </Paragraph>
    </Box>
  ))
  .add("Pre", () => <Pre>This is an example Paragraph</Pre>)
