import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export const FAQ = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="border border-neutral-200 rounded-md px-2"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Second Brain?</AccordionTrigger>
        <AccordionContent>
          Second Brain is your personal memory vault. You can save bookmarks, posts, and ideas
          in one place and easily find them later.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>How do I save a bookmark or post?</AccordionTrigger>
        <AccordionContent>
          Just paste the link into the app. In future, you’ll be able to save directly using our
          browser extension or mobile share option.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Can I organize my content?</AccordionTrigger>
        <AccordionContent>
          Yes! You can tag content with multiple labels like #learning, #coding, or #inspiration.
          You can also group bookmarks into categories.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>What types of content can I save?</AccordionTrigger>
        <AccordionContent>
          You can save website links, YouTube videos, tweets, blog posts, and even your own notes.
        </AccordionContent>
      </AccordionItem>

      

      <AccordionItem value="item-6">
        <AccordionTrigger>Can I share my saved content?</AccordionTrigger>
        <AccordionContent>
          Absolutely! You can generate a share link for any saved item to send to friends or keep
          it private for yourself.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
