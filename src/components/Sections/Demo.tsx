'use client'

import { useEffect, useRef } from 'react'
import { SectionTitle } from '../Util/SectionTitle'
import { DemoTables } from '@devtronaut/tablehub-component'
import { useTranslations } from 'next-intl'

const DemoSection = () => {
    const t = useTranslations('demo')

    return (
        <div
            id="demo"
            className="w-full scroll-mt-[120px] mb-20 flex flex-col items-center gap-6"
        >
            <SectionTitle content={t('title')} />
            <p className="w-full text-center lg:w-1/2">{t('intro')}</p>
            <div className="flex flex-col items-center justify-center w-full gap-2">
                <p>{t('resize')}</p>
                <TableDemo />
            </div>
        </div>
    )
}

export const TableDemo = () => {
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

        const onMouseUpLeftResize = () => {
            document.removeEventListener('mousemove', onMouseMoveLeftResize)
        }

        const onMouseUpRightResize = () => {
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
            className="@container mockup-window min-w-96 bg-cardLight dark:bg-cardDark border border-none shadow-md shadow-shimmer w-3/5"
            ref={refBox}
        >
            <div
                ref={refLeft}
                className="h-full w-4 absolute left-0 top-0 bg-cardLight dark:bg-cardDark cursor-col-resize"
            ></div>
            <div
                ref={refRight}
                className="h-full w-4 absolute right-0 top-0 bg-cardLight dark:bg-cardDark cursor-col-resize"
            ></div>
            <div className="w-[90%] m-auto h-full select-none">
                <div className="w-full text-md px-2 @md:px-8">
                    <DemoTables teamId={2798} teamName="VBC Uni Bern a" />
                </div>
            </div>
        </div>
    )
}

export default DemoSection
