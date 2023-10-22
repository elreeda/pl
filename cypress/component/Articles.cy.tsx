import React from "react";
import Articles from "../../src/components/Articles";
import Timeline from "../../src/components/Timeline";

describe("Articles.cy.tsx", () => {
  it("should render the Articles component", () => {
    const articles = [
      {
        articleNo: "AB20100",
        articleName: "iPhone Pro Case Baby Blue",
        quantity: 1,
        price: 59.0,
      },
      {
        articleNo: "AB20129",
        articleName: "Magsafe Charger for Apple iPhone",
        articleImageUrl:
          "https://images.unsplash.com/photo-1615526675159-e248c3021d3f",
        quantity: 1,
        price: 49.0,
      },
    ];
    cy.mount(<Articles articles={articles} />);
    cy.get("div[data-cy-root] > div").should("have.length", 2);
    cy.get("div[data-cy-root] > div")
      .eq(0)
      .should("contain", "iPhone Pro Case Baby Blue");
  });

  it("should render the Articles component with broken image", () => {
    const articles = [
      {
        articleNo: "AB20100",
        articleName: "iPhone Pro Case Baby Blue",
        quantity: 1,
        price: 59.0,
      },
    ];
    cy.mount(<Articles articles={articles} />);
    cy.get("div[data-cy-root] > div").find("img").should("not.exist");
  });
});

describe("Timeline.cy.tsx", () => {
  it("should render the Timeline component", () => {
    const checkpoints = [
      {
        status_details:
          "A new delivery date has been estimated for your shippment.",
        meta: {
          delivery_date: "2023-01-25",
          delivery_time_frame_from: "10:00",
          delivery_time_frame_to: "11:30",
        },
        event_timestamp: "2023-01-22T08:18:30Z",
        status: "New delivery date set",
        country_iso3: "USA",
        city: "Knoxville",
      },
      {
        status_details:
          "Your package was registered in our system by the sender.",
        event_timestamp: "2023-01-20T10:10:30Z",
        status: "Registered",
        country_iso3: "USA",
        city: "Knoxville",
      },
    ];

    cy.mount(<Timeline checkpoints={checkpoints} />);
    cy.get("div[data-cy-root] > div").should("have.length", 2);
    cy.get("div[data-cy-root] > div")
      .eq(0)
      .should("contain", checkpoints[1].status);
    cy.get("div[data-cy-root] > div")
      .eq(1)
      .should("contain", checkpoints[0].status);
  });
});
