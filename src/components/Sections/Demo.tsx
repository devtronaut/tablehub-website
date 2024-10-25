'use client'

import { ElementRef, ReactElement, useEffect, useRef } from 'react'
import { SectionTitle } from '../Util/SectionTitle'

const DemoSection = () => {
    return (
        <div
            id="demo"
            className="h-screen scroll-mt-[120px]  flex flex-col items-center gap-6"
        >
            <SectionTitle content="Demo" />
            <p className="w-full text-center">
                These Tables are designed to work on different sizes of devices
                without loosing relevant data. See how different sizes are
                handled.
            </p>
            <div className="flex flex-row justify-center w-full">
                <TableDemo />
            </div>
        </div>
    )
}

const TableDemo = () => {
    const refBox = useRef<HTMLDivElement>(null)
    const refRight = useRef<HTMLDivElement>(null)
    const refLeft = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const resizeableElement = refBox.current

        if (!resizeableElement || resizeableElement === null) return

        const styles = window.getComputedStyle(resizeableElement)

        let width = parseInt(styles.width, 10)
        let xCord = 0

        const onMouseMoveLeftResize = (event: MouseEvent) => {
            const dx = event.clientX - xCord
            xCord = event.clientX
            width = width - dx
            resizeableElement.style.width = `${width}px`
        }

        const onMouseMoveRightResize = (event: MouseEvent) => {
            const dx = event.clientX - xCord
            xCord = event.clientX
            width = width + dx
            resizeableElement.style.width = `${width}px`
        }

        const onMouseUpLeftResize = (event: MouseEvent) => {
            document.removeEventListener('mousemove', onMouseMoveLeftResize)
        }

        const onMouseUpRightResize = (event: MouseEvent) => {
            document.removeEventListener('mousemove', onMouseMoveRightResize)
        }

        const onMouseDownLeftResize = (event: MouseEvent) => {
            xCord = event.clientX
            resizeableElement.style.right = styles.right
            resizeableElement.style.left = ''

            document.addEventListener('mousemove', onMouseMoveLeftResize)
            document.addEventListener('mouseup', onMouseUpLeftResize)
        }

        const onMouseDownRightResize = (event: MouseEvent) => {
            xCord = event.clientX
            resizeableElement.style.right = ''
            resizeableElement.style.left = styles.left

            document.addEventListener('mousemove', onMouseMoveRightResize)
            document.addEventListener('mouseup', onMouseUpRightResize)
        }

        const resizerLeft = refLeft.current
        const resizerRight = refRight.current

        if (
            !resizerLeft ||
            resizerLeft === null ||
            !resizerRight ||
            resizerRight === null
        )
            return

        resizerLeft.addEventListener('mousedown', onMouseDownLeftResize)
        resizerRight.addEventListener('mousedown', onMouseDownRightResize)

        return () => {
            resizerLeft.removeEventListener('mousedown', onMouseDownLeftResize)
            resizerRight.removeEventListener(
                'mousedown',
                onMouseDownRightResize
            )
        }
    }, [])

    return (
        <div
            className="mockup-window bg-cardLight dark:bg-cardDark border border-none shadow-md shadow-shimmer w-1/2"
            ref={refBox}
        >
            <div
                ref={refLeft}
                className="h-full w-1 absolute left-0 top-0 bg-shimmer cursor-col-resize"
            ></div>
            <div
                ref={refRight}
                className="h-full w-1 absolute right-0 top-0 bg-shimmer cursor-col-resize"
            ></div>
            <div className="w-full text-center m-auto px-4 py-16">
                Full screen demo of Tablehub tables ...
            </div>
        </div>
    )
}

export default DemoSection
