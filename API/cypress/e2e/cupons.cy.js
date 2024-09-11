/// <reference types= 'cypress'/>

describe('Tesde de API - Cupons', () => {
  it('Cadastro de Cupom', () => {
    let token = "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
    let cupom = `Cupom EBAC ${Math.floor(Math.random() * 100000000)}`

    cy.request({
      method: 'POST',
      url: '/wc/v3/coupons',
      headers: {authorization: token},
      body: {
                "code": cupom,
                "amount": "10",
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste"
      }
    }).then(response => {
      expect(response.status).to.equal(201)
    })
  })

  it('Listagem de todos os Cupons', () => {
    let token = "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
    cy.request({
      method: 'GET',
      url: '/wc/v3/coupons',
      headers: {authorization: token},
    }).then(response => {
      expect(response.status).to.equal(200)
    })
  })

  it('Listagem de Cupons por ID', () => {
    let token = "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
    cy.request({
      method: 'GET',
      url: '/wc/v3/coupons' + '/4787',
      headers: {authorization: token},
    }).then(response => {
      expect(response.status).to.equal(200)
    })
  })
})