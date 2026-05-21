import React from "react";

export const TestimonialsColumn = (props) => {
  const duration = props.duration || 10;
  return (
    <div className={props.className}>
      <div
        className="flex flex-col gap-6 pb-6 bg-background testimonials-column-motion"
        style={{ "--animation-duration": `${duration}s` }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full testimonial-card-motion" key={i}>
                  <div className="testimonial-text-motion">{text}</div>
                  <div className="flex items-center gap-2 mt-5 testimonial-profile-motion">
                    {/* No avatar image as requested */}
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 testimonial-name-motion">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight testimonial-role-motion">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </div>
    </div>
  );
};

