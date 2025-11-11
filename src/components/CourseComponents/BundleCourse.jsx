import React from 'react';
import { Link } from 'react-router-dom';

const ratingFormatter = new Intl.NumberFormat('en-IN');

const pillStyles = {
  bundle: 'bg-[#FFF2001A] text-yellow',
  individual: 'bg-[#00DC281A] text-[#00DC28]',
};

const variantStyles = {
  slider: 'min-w-[280px] max-w-[320px]',
  grid: 'w-full',
  sidebar: 'w-full',
};

const BundleCourse = ({
  course,
  width,
  variant = 'grid',
  className = '',
}) => {
  if (!course) return null;

  const {
    page_link,
    img,
    level,
    rating,
    rating_persons,
    star_i,
    domain,
    bundle_tot_courses,
    bundle_i,
    indi_lang_i,
    lang_detail,
    schedule_i,
    hours,
    ment_icon,
    mentors,
    more_count,
    para,
    type,
  } = course;

  const pillClass =
    type && pillStyles[type.toLowerCase()] ? pillStyles[type.toLowerCase()] : 'bg-[#121212] text-[#C0C0C0]';

  const variantClass = variantStyles[variant] ?? variantStyles.grid;

  const formattedRatingCount =
    typeof rating_persons === 'number'
      ? ratingFormatter.format(rating_persons)
      : rating_persons;

  return (
    <Link to={page_link ?? '#'} className="block h-full">
      <article
        className={`relative h-full ${variantClass} ${className}`}
        style={width ? { width } : undefined}
      >
        <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#4E410E] bg-[#0F0F0F] p-3 shadow-[0_12px_40px_rgba(255,242,0,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(255,242,0,0.10)]">
          <figure className="overflow-hidden rounded-lg">
            <img
              src={img}
              alt={domain}
              loading="lazy"
              className="aspect-[16/10] w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </figure>

          <div className="mt-3 flex flex-1 flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              {level && (
                <span className="rounded-[4px] px-2 py-1 text-[12px] font-medium uppercase text-[#00DC28] bg-[#00DC281A]">
                  {level}
                </span>
              )}

              {(rating || rating === 0) && (
                <span className="flex items-center gap-1 text-sm text-[#F6F6F6]">
                  {star_i && <img src={star_i} alt="" className="h-4 w-4" />}
                  <span className="font-semibold">{rating}</span>
                  {formattedRatingCount && (
                    <span className="text-xs text-[#B8B8B8]">
                      ({formattedRatingCount})
                    </span>
                  )}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#9D8B4D]">
              <span className={`rounded-[4px] px-2 py-1 font-semibold ${pillClass}`}>
                {type ? type : 'Course'}
              </span>
              {course.category && (
                <span className="hidden rounded-[4px] bg-[#1A1A1A] px-2 py-1 font-semibold text-[#C0C0C0] sm:inline-block">
                  {course.category}
                </span>
              )}
            </div>

            <h3 className="font-clash text-[18px] leading-[24px] text-white md:text-[20px]">
              {domain}
            </h3>

            {para && (
              <p className="text-[14px] leading-[20px] text-[#C0C0C0] line-clamp-2">
                {para}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 text-xs text-[#C0C0C0] sm:text-sm">
              {bundle_tot_courses && bundle_i && (
                <span className="flex items-center gap-1">
                  <img src={bundle_i} alt="" className="h-4 w-4" />
                  <span>{bundle_tot_courses}</span>
                </span>
              )}
              {indi_lang_i && lang_detail && (
                <span className="flex items-center gap-1">
                  <img src={indi_lang_i} alt="" className="h-4 w-4" />
                  <span>{lang_detail}</span>
                </span>
              )}
              {schedule_i && hours && (
                <span className="flex items-center gap-1">
                  <img src={schedule_i} alt="" className="h-4 w-4" />
                  <span>{hours}</span>
                </span>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3 border-t border-[#252525] pt-3">
            {ment_icon && (
              <img
                src={ment_icon}
                alt={mentors}
                className="h-10 w-10 rounded-full object-cover"
              />
            )}
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">
                {mentors}
              </p>
              {more_count && (
                <p className="text-xs text-[#B8B8B8]">{more_count}</p>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BundleCourse;