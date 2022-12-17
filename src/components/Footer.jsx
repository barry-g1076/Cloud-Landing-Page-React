import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer=()=> {
    return (
      <div className="w-full mt-24 bg-slate-900 text-gray-300 py-4 px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
          <div>
            <h6 className="font-bold uppercase">Solutions</h6>
            <ul>
              <li className="py-1">Marketing</li>
              <li className="py-1">Data</li>
              <li className="py-1">Analytics</li>
              <li className="py-1">Commerce</li>
              <li className="py-1">Cloud</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold uppercase">support</h6>
            <ul>
              <li className="py-1">Pricing</li>
              <li className="py-1">Documentation</li>
              <li className="py-1">Guides</li>
              <li className="py-1">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold uppercase">Company</h6>
            <ul>
              <li className="py-1">Blog</li>
              <li className="py-1">Jobs</li>
              <li className="py-1">Press</li>
              <li className="py-1">Partners</li>
              <li className="py-1">About</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold uppercase">Legal</h6>
            <ul>
              <li className="py-1">Claim</li>
              <li className="py-1">Privacy</li>
              <li className="py-1">Polices</li>
              <li className="py-1">Conditions</li>
              <li className="py-1">terms</li>
            </ul>
          </div>
          <div className="col-span-2 pt-8 md:pt-2">
            <p className="font-bold uppercase">Subscribe to our newsletter</p>
            <p className="py-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className="flex flex-col sm:flex-row ">
                <input type="email" className="w-full p-2 rounded-md mb-4 mr-4"/>
                <button className="p-2 mb-4">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col max-w-[1240px] px-2 py-4  justify-between  sm:flex-row text-center text-gray-500">
            <p className="py-4">2022 Workflow, LLC. All Rights Reserved</p>
            <div className="flex justify-between sm:w-[300px] pt-4 text-2xl ">
                <FaFacebook/>
                <FaTwitch/>
                <FaTwitter/>
                <FaGithub/>
                <FaInstagram/>
            </div>
        </div>
      </div>
    );
  }

export default Footer;
