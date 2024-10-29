import { SectionTitle } from '../Util/SectionTitle'

const FaqSection = () => {
    return (
        <div
            id="faq"
            className="h-screen scroll-mt-[120px] mb-20 flex flex-col items-center gap-6"
        >
            <SectionTitle content={'FAQ'} />

            <div className="w-1/2 space-y-4">
                <FaqElement
                    question="Why should we use Tablehub? Is the SwissVolley API not enough?"
                    answer="The SwissVolley API is a great initiative and used as the data source for Tablehub. It does however not offer an easy way for clubs to present the data on their websites. In consequence, every club would have to build their own custom solution around the API to make use of the data. Tablehub wants to streamline that process and offer a central and expandable solution. By opening the source for the project, other developpers with the same goal are encouraged to contribute to Tablehub, instead of creating something from scratch, with the same goal."
                />
                <FaqElement
                    question="How does Tablehub work?"
                    answer="Tablehub works with an own backend and data store. This is firstly, to be less dependant from the SwissVolley API in terms of infrastructure and data, and secondly to protect the API keys of the clubs relying on Tablehub. Only offering a frontend solution, would mean to expose the API key to the public, which should be avoided. All infrastructure is consumed from AWS (using Lambdas, DynamoDB and API Gateway)."
                />
                <FaqElement
                    question="What is the beta phase? When will the first production release happen?"
                    answer="The functionally comparable predecessor of Tablehub has run and been used for two years by VBC Uni Bern without major issues. It is therefore considered stable. Now that more clubs should be able to use Tablehub, other usage patterns and requirements for the service are expected. With the beta phase, those patterns and requirements will be evaluated with the participating clubs. Improvements will be made during and after the beta phase, to make Tablehub fit for an even wider audience of volleyball clubs. A production release is planned for summer 2025 in preparation of the indoor volleyball season of 2025/26. Clubs can become part of the beta upon request (see next question)."
                />
                <FaqElement
                    question="How can we use Tablehub? What's the cost of the service?"
                    answer=""
                />
            </div>
        </div>
    )
}

type FaqProps = {
    question: string
    answer: string
}

const FaqElement = ({ question, answer }: FaqProps) => {
    return (
        <div className="collapse collapse-arrow bg-cardLight dark:bg-cardDark shadow-md shadow-shimmer">
            <input type="radio" name="faq" />
            <div className="collapse-title font-semibold">{question}</div>
            <div className="collapse-content">
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default FaqSection
