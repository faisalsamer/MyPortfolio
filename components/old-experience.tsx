// "use client";

// import { Globe } from "lucide-react";
// import { experienceData } from "@/lib/data";

// const projectIcons = [
//   <svg key="ai" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-2" style={{ fill: "var(--color-primary-purple)" }}>
//     <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm9.3-3.6l-1.7-1.4a7.8 7.8 0 0 0 0-4l1.7-1.4a.5.5 0 0 0 .1-.6l-1.7-3a.5.5 0 0 0-.6-.3l-2 .8a8.3 8.3 0 0 0-3.5-2l-.3-2.1a.5.5 0 0 0-.5-.4h-3.4a.5.5 0 0 0-.5.4l-.3 2.1a8.3 8.3 0 0 0-3.5 2l-2-.8a.5.5 0 0 0-.6.3l-1.7 3a.5.5 0 0 0 .1.6l1.7 1.4a7.8 7.8 0 0 0 0 4l-1.7 1.4a.5.5 0 0 0-.1.6l1.7 3a.5.5 0 0 0 .6.3l2-.8a8.3 8.3 0 0 0 3.5 2l.3 2.1a.5.5 0 0 0 .5.4h3.4a.5.5 0 0 0 .5-.4l.3-2.1a8.3 8.3 0 0 0 3.5-2l2 .8a.5.5 0 0 0 .6-.3l1.7-3a.5.5 0 0 0-.1-.6z" />
//   </svg>,
//   <svg key="admin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-2" style={{ fill: "var(--color-primary-purple)" }}>
//     <path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm6 10.8l-2.3-2.3a3.9 3.9 0 0 1 2.3-7 4 4 0 0 1 4 4 3.9 3.9 0 0 1-4 5.3z" />
//   </svg>,
//   <svg key="design" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-2" style={{ fill: "var(--color-primary-purple)" }}>
//     <path d="M7 3h10a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H7zm1 2h8a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" />
//   </svg>,
// ];

// export default function Experience() {
//   return (
//     <section id="experience" className="flex flex-col items-center py-16 md:py-20 px-4 sm:px-6 md:px-8">
//       <h2 className="text-4xl md:text-5xl font-semibold text-center scroll-animate fade-up"
//         style={{ color: "var(--ui-heading-color)" }}>
//         Professional Experience
//       </h2>
//       <p className="text-lg md:text-xl mt-4 mb-12 text-center scroll-animate fade-up"
//         style={{ color: "var(--ui-subheading-color)" }}>
//         Building real-world solutions at Datalytica
//       </p>

//       <div className="flex flex-col w-full max-w-7xl">
//         {/* Company Info */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-4 gap-4 scroll-animate fade-up">
//           <div className="flex flex-col">
//             <div className="flex gap-2 items-center mb-4">
//               <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: "var(--ui-heading-color)" }}>
//                 {experienceData.company}
//               </h3>
//               <a href={experienceData.website} target="_blank" rel="noopener noreferrer"
//                 className="opacity-60 hover:opacity-100 transition-opacity">
//                 <Globe width={24} height={24} style={{ color: "var(--color-text-primary)" }} />
//               </a>
//             </div>
//             <p className="text-lg" style={{ color: "var(--ui-subheading-color)" }}>
//               {experienceData.role}
//             </p>
//           </div>
//           <span className="px-4 py-2 rounded-md font-semibold whitespace-nowrap"
//             style={{ backgroundColor: "var(--color-primary-purple)", color: "var(--color-card)" }}>
//             {experienceData.period}
//           </span>
//         </div>

//         {/* Project Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-12">
//           {experienceData.projects.map((project, index) => (
//             <div key={project.title}
//               className="flex flex-col p-6 border-t-4 border rounded-lg transition-transform duration-300 hover:-translate-y-2 scroll-animate fade-up"
//               style={{
//                 backgroundColor: "var(--color-card)",
//                 borderTopColor: "var(--color-primary-purple)",
//                 borderColor: "var(--color-gray-200)",
//                 boxShadow: "var(--ui-shadow-modern)",
//               }}>
//               <div className="flex items-center mb-4">
//                 {projectIcons[index]}
//                 <h4 className="text-lg font-semibold" style={{ color: "var(--ui-heading-color)" }}>
//                   {project.title}
//                 </h4>
//               </div>
//               <p className="text-base mb-3" style={{ color: "var(--color-primary-purple)" }}>
//                 {project.tools}
//               </p>
//               <p className="text-base" style={{ color: "var(--color-text-primary)" }}>
//                 {project.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Key Achievements */}
//         <div className="p-6 md:p-8 border rounded-lg scroll-animate fade-up"
//           style={{
//             backgroundColor: "var(--color-card)",
//             borderColor: "var(--color-gray-200)",
//             boxShadow: "var(--ui-shadow-modern)",
//           }}>
//           <h4 className="text-lg font-semibold mb-6" style={{ color: "var(--ui-heading-color)" }}>
//             Key Achievements
//           </h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {experienceData.achievements.map((achievement, index) => (
//               <div key={index} className="flex items-start">
//                 <div className="p-2 rounded-full mr-4 mt-1 shrink-0"
//                   style={{ backgroundColor: "var(--color-primary-purple)" }}>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
//                     <path d="M9 16.2l-3.5-3.5a1 1 0 0 0-1.4 1.4l4.2 4.2a1 1 0 0 0 1.4 0l10-10a1 1 0 0 0-1.4-1.4L9 16.2z" />
//                   </svg>
//                 </div>
//                 <p className="text-base" style={{ color: "var(--color-text-primary)" }}>
//                   {achievement}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
