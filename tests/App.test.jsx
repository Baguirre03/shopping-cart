import { getByDisplayValue, render } from "@testing-library/react"
import App from "../src/App"
import { expect, vi } from "vitest"
import { BrowserRouter } from "react-router-dom"
import ItemCard from "../src/components/ItemCard"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Cart from "../src/Cart"

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
    it('renders two buttons correctly 2', () => {
        render(<ItemCard data={data} cart={cart}></ItemCard>)
        const buttons = screen.getAllByRole('button')
        expect(buttons[0].textContent).toBe('-')
        expect(buttons[1].textContent).toBe('+')
    })

    it('clicks the buttons', async () => {
        const onClick = vi.fn()
        const user = userEvent.setup()

        render(<ItemCard data={data} cart={cart} minusCart={onClick}></ItemCard>)
        const buttons = screen.getAllByRole('button')
        await user.click(buttons[0])
        expect(onClick).toBeCalled()
    })

    it('clicks the second', async () => {
        const onClick = vi.fn()
        const user = userEvent.setup()

        render(<ItemCard data={data} cart={cart} addCart={onClick}></ItemCard>)
        const buttons = screen.getAllByRole('button')
        await user.click(buttons[1])
        expect(onClick).toBeCalled()
    })
})

describe('loads cards for checkout', () => {
    let cart = 1
    let cartItems = [{
        count: 1,
        price: 10,
        id: 1,
    }] 
    render(<Cart cart={cart} cartItems={cartItems}></Cart>)
    const headings = screen.getAllByRole('heading', {level: 3})
    const h1 = screen.getByRole('heading', {level: 1})

    it('renders cart heading', () => {
        expect(h1.textContent).toMatch(/cart/i)
    })

    it('loads default content', () => {
        expect(headings[0].textContent).toMatch(/total items in cart 1/i)
    })

    it('renders numbers correct', () => {
        expect(headings[1].textContent).toEqual('Total cost: $10')
    })
})

describe('two cart items', () => {
    let cartItems2 = [{
        count: 2,
        price: 10,
        id: 1,
        title: 'hello'
    }]   
    it('has right title', () => {
        render(<Cart cart={false} cartItems={cartItems2}></Cart>)
        expect(screen.getByRole('heading', {level: 4}).textContent).toMatch(/hello/i)
    }) 

    it('has the count', () => {
        render(<Cart cart={false} cartItems={cartItems2}></Cart>)
        expect(screen.getByText(`Count: 2`)).toBeInTheDocument()
    }) 
})
