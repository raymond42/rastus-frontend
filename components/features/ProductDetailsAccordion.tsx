import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { montserrat, montserratBold } from "@/utils/fonts";
import { ProductType } from "@/app/types/product";

type ProductDetailsAccordionProps = {
  product: ProductType;
  highlights?: string[];
  shippingReturns?: string;
  sizeFit?: string;
  sizeChart?: {
    size: string;
    chest: string;
    length: string;
  }[];
};

const ProductDetailsAccordion = ({ product }: ProductDetailsAccordionProps) => {
  const { shortDescription } = product;

  const accordionProduct = {
    longDescription:
      "A premium cotton t-shirt designed for everyday comfort and style. Made with 100% organic cotton and tailored for a relaxed fit, this shirt will quickly become a wardrobe essential.",
    shortDescription:
      "Soft, breathable, and sustainably made — your new favorite everyday t-shirt.",
    highlights: [
      "100% organic cotton",
      "Relaxed fit",
      "Pre-shrunk & garment dyed",
      "Machine washable",
      "Made in Portugal",
    ],
    shippingReturns:
      "Free standard shipping on orders over $50. We also offer expedited shipping at checkout. To return an item, please visit our returns portal and use your order number to start the process.",
    sizeFit:
      "Fits true to size. For a looser fit, consider sizing up. Fabric has slight stretch.",
    sizeChart: [
      { size: "S", chest: "36-38", length: "27" },
      { size: "M", chest: "39-41", length: "28" },
      { size: "L", chest: "42-44", length: "29" },
      { size: "XL", chest: "45-47", length: "30" },
    ],
  };

  const { highlights, shippingReturns, sizeFit, sizeChart } = accordionProduct;

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-primary sm:p-0 p-6"
    >
      {/* Description */}
      <AccordionItem value="description">
        <AccordionTrigger
          className={`${montserratBold.className} sm:text-[19px] text-[16px]`}
        >
          Description
        </AccordionTrigger>
        <AccordionContent
          className={`${montserrat.className} sm:text-[16px] text-[12px] space-y-3`}
        >
          <p>{shortDescription}</p>
          {highlights.length > 0 && (
            <ul className="list-disc list-inside">
              {highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </AccordionContent>
      </AccordionItem>

      {/* Shipping & Returns */}
      <AccordionItem value="shipping">
        <AccordionTrigger
          className={`${montserratBold.className} sm:text-[19px] text-[16px]`}
        >
          Shipping & Returns
        </AccordionTrigger>
        <AccordionContent
          className={`${montserrat.className} sm:text-[16px] text-[12px] space-y-3`}
        >
          <p>
            Estimated delivery:{" "}
            <strong>Within 1 to 2 hours after making the payment</strong>
          </p>
          <p>
            Returns accepted within <strong>3 days</strong> of purchase. Items
            must be unused and in original packaging.
          </p>
          {shippingReturns && <p>{shippingReturns}</p>}
        </AccordionContent>
      </AccordionItem>

      {/* Size & Fit */}
      <AccordionItem value="size-fit">
        <AccordionTrigger
          className={`${montserratBold.className} sm:text-[19px] text-[16px]`}
        >
          Size & Fit
        </AccordionTrigger>
        <AccordionContent
          className={`${montserrat.className} sm:text-[16px] text-[12px] space-y-4`}
        >
          <p>{sizeFit}</p>

          {sizeChart.length > 0 && (
            <div className="overflow-auto">
              <table className="min-w-[300px] w-full text-left border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Size</th>
                    <th className="p-2 border">Chest (in)</th>
                    <th className="p-2 border">Length (in)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.map((row, i) => (
                    <tr key={i}>
                      <td className="p-2 border">{row.size}</td>
                      <td className="p-2 border">{row.chest}</td>
                      <td className="p-2 border">{row.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p>Model is 6&apos;1&quot; and wears a size M.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductDetailsAccordion;
