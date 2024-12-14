import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { ImQuotesLeft } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import{motion} from "framer-motion";

function card({data}) {
  return (
    <motion.div drag className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white p-5 overflow-hidden">
      < ImQuotesLeft/>
      <p className="text-sm leading-tight mt-5">
       {data.desc}
      </p>
      <div className="footer absolute bottom-0 w-full left-0  ">
        <div className="flex items-center justify-between mb-5 py-3  px-8 ">
          <h5>{data.filesize}</h5>
          {/* <span className="w-5 h-5 rounded-full flex items-center justify-center">
            {data.close?< RiDoubleQuotesR/>:<MdOutlineFileDownload size=".7rem" color="#fff"/> }
          </span> */}
        </div>
        {
          data.tag.isOpen &&(
            <div className={`tag w-full py-3 bg-green-600 flex items-center justify-center`}>
          {/* <h3 className="text-sm">{data.tag.tagTitle}</h3> */}
        </div>
          )}
      </div>
    </motion.div>
  );
}

export default card;
