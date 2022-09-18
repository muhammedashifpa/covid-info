import { render, screen } from "@testing-library/react"
import RenderByStatus from "./RenderByStatus"


describe('render by status',()=>{
    test('render by status if ideal',()=>{
        render(
            <RenderByStatus
                element={<div>test text</div>}
                status={'idle'}
            />
        )
        const selectTestElement = screen.queryByText('test text')
        expect(selectTestElement).not.toBeInTheDocument()
        const selectLoadingElement =  screen.queryByTestId('loading-spinner')
        expect(selectLoadingElement).not.toBeInTheDocument()
        const selectElement = screen.getByText('Please wait to start loading')
        expect(selectElement).toBeInTheDocument()
  
    })
    test('render by status if loading',()=>{
        render(
            <RenderByStatus
                element={<div>test text</div>}
                status={'loading'}
            />
        )
       const selectTestElement = screen.queryByText('test text')
       expect(selectTestElement).not.toBeInTheDocument()
       const selectElement =  screen.getByTestId('loading-spinner')
       expect(selectElement).toBeInTheDocument()
    })
    test('render by status if succeeded',()=>{
      render(
            <RenderByStatus
                element={<div>test text</div>}
                status={'succeeded'}
            />
        )
       const selectElement =  screen.queryByTestId('loading-spinner')
       const selectTestElement = screen.getByText('test text')
       expect(selectElement).not.toBeInTheDocument()
       expect(selectTestElement).toBeInTheDocument()
    })
    test('render by status if faild',()=>{
      render(
            <RenderByStatus
                element={<div>test text</div>}
                status={'failed'}
            />
        )
       const selectElement =  screen.queryByTestId('loading-spinner')
       expect(selectElement).not.toBeInTheDocument()
       const selectTestElement = screen.queryByText('test text')
       expect(selectTestElement).not.toBeInTheDocument()
       const selectFaildMessageElement = screen.getByText('404 Something went wrong try again.')
       expect(selectFaildMessageElement).toBeInTheDocument()
    })
})