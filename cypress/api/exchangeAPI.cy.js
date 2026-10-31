describe("Test API Exchange", () => {

    it("TC : test the historical date", () => {
        cy.env(["apiUrl"]).then(({ apiUrl }) => {
        cy.request({
            method : "GET",
            url : `${apiUrl}/v1/2025-01-01`,
            qs: {
                access_key: "9e2c52f8f3e6d8de5308e28f29872189",
                base: "EUR",
                symbols: "USD"
            }
        }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.not.be.empty;
                expect(response.body.success).to.eq(true);
                expect(response.body.base).to.eq("EUR");
                expect(response.body.rates).to.have.property("USD");
                expect(response.body.rates.USD).to.be.a("number");
                expect(response.body.rates.USD).to.be.greaterThan(0);

        })
        })
    })




    })

