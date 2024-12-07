import Image from 'next/image';
import { ICONS } from '@components/xyflow/utils/helper';
import Button from '@components/common/Form/Button';

function TeaxtInputQue() {
  return (
    <>
      <p>Text Input</p>
      <div className="h-[710px] w-[365px] border rounded-md bg-[#FFF]">
        <div className="flex items-center justify-between border-b p-4 ">
          <Image alt="start_page" src={ICONS.cross} width={24} height={24} />
          <Image alt="start_page" src={ICONS.option} width={24} height={24} />
        </div>

        <div className="px-4 pt-6 pb-8">
          <p className="text-[#9CA3AF] text-lg font-bold">
            সেকশন টাইটেল (Optional)
          </p>
          <p className="mt-1 text-[#9CA3AF] text-base font-medium">
            নিশ্চয়ই তোমার চাঁদ সম্পর্কে জানার আগ্রহ আছে! চলো এই লেসনটিতে চাঁদ
            সম্পর্কে জেনে আসি!
          </p>

          <div className="bg-white border rounded-md mx-auto mt-6 flex items-center justify-center h-[188px] w-full max-w-[314px]">
            <Image
              alt="image_upload"
              src={ICONS.image_upload}
              width={41}
              height={41}
            />
          </div>

          <Button
            type="secondary"
            class_name="mt-3.5 max-w-[140px] max-h-[48px]"
          >
            এগিয়ে যাই
          </Button>
        </div>

        {/* Text Input Section */}
        <div className="bg-[#F5F5F5] px-4 pt-4 pb-7">
          <p className="text-[#6B7280] text-xs font-medium">প্রশ্ন ১</p>
          {/* Question */}
          <p className="text-[#4B5563] text-base font-semibold ml-1 mt-1">
            এখানে সম্পূর্ণ প্রশ্ন লিখুন
          </p>
          {/* Answer */}
          <p
            className="mt-4 w-full flex items-start bg-white border border-[#E5E7EB] shadow-[0px_-3.005px_0px_0px_#E5E7EB_inset] rounded-[10px] border-solid p-4
              text-[#6B7280] text-sm font-medium"
          >
            এখানে উত্তর টাইপ করুন
          </p>

          <div className="flex items-center justify-start gap-3 mt-7">
            {/* Check Button */}
            <Button type="secondary" class_name="max-w-[122px] max-h-[44px]">
              চেক করি
            </Button>

            {/* Hint Button */}
            <Button type="outline" class_name="max-w-[122px] max-h-[44px]">
              <span className="flex items-center justify-center gap-1 ">
                <Image
                  alt="start_page"
                  src={ICONS.bulb_green}
                  width={24}
                  height={24}
                />
                <p className="mb-0">হিন্ট</p>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeaxtInputQue;