"use client";

import { motion } from 'framer-motion';

export default function DisclaimerPolicy() {
    return (
        <div className="bg-zinc-50 min-h-screen pt-40 pb-32">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block underline decoration-indigo-600 decoration-2 underline-offset-4">Legal</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-black text-slate-900 mb-20 tracking-tighter leading-[0.9] italic">
                        Legal <br /> Disclaimer.
                    </h1>
                </motion.div>

                <div className="space-y-12 prose prose-zinc prose-xl max-w-none text-slate-600 font-medium leading-[1.8]">
                    <p>
                        The information contained on this website is for general information purposes only. The information is provided by <span className="text-slate-900 font-black italic">MotoKids Toys</span> and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                    </p>
                    <p>
                        In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                    </p>
                    <p>
                        Through this website you are able to link to other websites which are not under the control of MotoKids Toys. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                    </p>

                    <div className="p-10 bg-white rounded-[3rem] border border-zinc-200 mt-20">
                        <h4 className="text-slate-900 font-serif font-black text-2xl mb-4 italic">Operational Integrity</h4>
                        <p className="text-slate-500 text-lg">Every effort is made to keep the website up and running smoothly. However, MotoKids Toys takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

