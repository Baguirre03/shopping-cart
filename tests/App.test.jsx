import { getByDisplayValue, render } from "@testing-library/react"
import App from "../src/App"
import { expect } from "vitest"
import { BrowserRouter } from "react-router-dom"
import ItemCard from "../src/components/ItemCard"
import { screen } from "@testing-library/react"

describe('main page works', () => {
    it('loads the page', () => {
        const {container} = render(<BrowserRouter><App></App></BrowserRouter>)
        expect(container).toMatchSnapshot()
    })
})


describe('creates an item card correctly', () => {
    let cart = false
    let data = {
        image: null,
        description: 'test',
        title: 'title',
    }
    it('creates an item correctly', () => {
        render(<ItemCard data={data} cart={cart}></ItemCard>)
        expect(screen.getByRole('heading', {level: 4}).textContent).toMatch(/title/i)
    })
})