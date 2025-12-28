import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Project {
  name: string;
  url?: string;
}

interface Skill {
  name: string;
  description: string;
  icon: React.ElementType;
  colorDark: string;
  colorLight: string;
  universityProjects: Project[];
  workProjects: Project[];
  hoppyProjects: Project[];
}

interface SkillDialogProps {
  selectedSkill: Skill | null;
  onClose: () => void;
  isDarkMode: boolean;
}

const SkillDialog = ({ selectedSkill, onClose, isDarkMode }: SkillDialogProps) => {
  // 1. Handle Scroll Lock and Padding Compensation on OPEN
  useEffect(() => {
    if (selectedSkill) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }, [selectedSkill]);

  // 2. Handle Scroll Reset only AFTER exit animation finishes (Prevents shift)
  const handleExitComplete = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };

  // 3. Handle Escape Key Close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {selectedSkill && (
        <div className='fixed inset-0 z-[1000] flex items-center justify-center p-4'>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='absolute inset-0 bg-black/60 backdrop-blur-sm'
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0.3 }}
            className='relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 custom-scrollbar z-[1001]'
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--color-card)',
              boxShadow: 'var(--ui-shadow-modern)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:opacity-80'
              style={{
                backgroundColor: 'var(--color-gray-100)',
                color: 'var(--ui-text-color)'
              }}
            >
              ✕
            </button>

            {/* Header: Icon & Title */}
            <div className='flex items-center gap-4 mb-6'>
              <div
                style={{
                  color: isDarkMode
                    ? selectedSkill.colorDark
                    : selectedSkill.colorLight
                }}
              >
                {(() => {
                  const IconComponent = selectedSkill.icon;
                  return <IconComponent size={64} />;
                })()}
              </div>
              <h3
                className='text-3xl font-bold'
                style={{
                  color: 'var(--ui-heading-color)',
                  fontFamily: 'var(--font-family-secondary)'
                }}
              >
                {selectedSkill.name}
              </h3>
            </div>

            {/* About Section */}
            <div className='mb-6'>
              <h4 className='text-lg font-semibold mb-2' style={{ color: 'var(--ui-subheading-color)' }}>
                About
              </h4>
              <p style={{ color: 'var(--ui-text-color)', lineHeight: '1.6' }}>
                {selectedSkill.description}
              </p>
            </div>

            {/* University Projects */}
            {selectedSkill.universityProjects.length > 0 && (
              <div className='mb-6'>
                <h4 className='text-lg font-semibold mb-3' style={{ color: 'var(--ui-subheading-color)' }}>
                  University Projects
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {selectedSkill.universityProjects.map(project => (
                    <span
                      key={project.name}
                      className='px-3 py-1.5 rounded-lg text-sm'
                      style={{
                        backgroundColor: 'var(--color-gray-100)',
                        color: 'var(--ui-text-color)'
                      }}
                    >
                      {project.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Work Projects */}
            {selectedSkill.workProjects.length > 0 && (
              <div className='mb-6'>
                <h4 className='text-lg font-semibold mb-3' style={{ color: 'var(--ui-subheading-color)' }}>
                  Work Projects
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {selectedSkill.workProjects.map(project =>
                    project.url ? (
                      <Link
                        key={project.name}
                        href={project.url}
                        className='px-3 py-1.5 rounded-lg text-sm transition-all hover:scale-105'
                        style={{
                          backgroundColor: 'var(--color-primary-blue)',
                          color: '#FFFFFF'
                        }}
                      >
                        {project.name}
                      </Link>
                    ) : (
                      <span
                        key={project.name}
                        className='px-3 py-1.5 rounded-lg text-sm'
                        style={{
                          backgroundColor: 'var(--color-gray-100)',
                          color: 'var(--ui-text-color)'
                        }}
                      >
                        {project.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Hobby Projects */}
            {selectedSkill.hoppyProjects.length > 0 && (
              <div>
                <h4 className='text-lg font-semibold mb-3' style={{ color: 'var(--ui-subheading-color)' }}>
                  Hobby Projects
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {selectedSkill.hoppyProjects.map(project =>
                    project.url ? (
                      <Link
                        key={project.name}
                        href={project.url}
                        className='px-3 py-1.5 rounded-lg text-sm transition-all hover:scale-105'
                        style={{
                          backgroundColor: 'var(--color-primary-blue)',
                          color: '#FFFFFF'
                        }}
                      >
                        {project.name}
                      </Link>
                    ) : (
                      <span
                        key={project.name}
                        className='px-3 py-1.5 rounded-lg text-sm'
                        style={{
                          backgroundColor: 'var(--color-gray-100)',
                          color: 'var(--ui-text-color)'
                        }}
                      >
                        {project.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SkillDialog;