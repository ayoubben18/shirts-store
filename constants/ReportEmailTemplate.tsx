import { ServerEnv } from "@/lib/env-server";
import { Button, Heading, Text } from "@react-email/components";

type Props = {
  id: string;
};

const ReportEmailTemplate = ({ id }: Props) => {
  return (
    <table
      align="center"
      border={0}
      cellPadding="0"
      cellSpacing="0"
      className="m-[16px] h-[424px] rounded-[12px] bg-red-500"
      role="presentation"
      style={{
        // This url must be in quotes for Yahoo
        backgroundImage: "url('/static/my-image.png')",
        backgroundSize: "100% 100%",
      }}
      width="100%"
    >
      <tbody>
        <tr>
          <td align="center" className="p-[40px] text-center">
            <Text className="m-0 font-semibold text-gray-200">
              {new Date().toLocaleDateString()}
            </Text>
            <Heading as="h1" className="m-0 mt-[4px] font-bold text-white">
              Payement Failed
            </Heading>
            <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-white">
              {`Payement Failed for subscription ${id} at ${new Date().toLocaleTimeString()}`}
            </Text>
            <Button
              className="mt-[24px] rounded-[8px] border border-solid border-gray-200 bg-white px-[40px] py-[12px] font-semibold text-gray-900"
              href={`${ServerEnv.PANEL_URL}/orders`}
            >
              See Order
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ReportEmailTemplate;
