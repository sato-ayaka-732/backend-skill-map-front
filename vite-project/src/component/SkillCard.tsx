import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import type { SkillCategory } from '../data/skills'

type SkillCardProps = {
  category: SkillCategory
}

const levelColor: Record<string, string> = {
  基礎: '#10b981',
  中級: '#3b82f6',
  上級: '#a855f7',
}

export default function SkillCard({ category }: SkillCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        borderTop: 6,
        borderColor: category.color,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        borderRadius: 2,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              bgcolor: `${category.color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              flexShrink: 0,
            }}
          >
            {category.icon}
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="caption"
              sx={{
                color: category.color,
                fontWeight: 700,
                letterSpacing: 1,
                display: 'block',
              }}
            >
              {String(category.id).padStart(2, '0')} / {category.subtitle}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, lineHeight: 1.3, color: '#1f2937' }}
            >
              {category.title}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
          {category.items.map((item) => (
            <Box
              key={item.name}
              sx={{
                p: 1.2,
                borderRadius: 1.5,
                bgcolor: '#fafafa',
                borderLeft: 3,
                borderColor: category.color,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 0.3,
                  gap: 1,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: '#1f2937' }}
                >
                  {item.name}
                </Typography>
                {item.level && (
                  <Chip
                    label={item.level}
                    size="small"
                    sx={{
                      height: 18,
                      fontSize: 10,
                      fontWeight: 700,
                      bgcolor: `${levelColor[item.level]}1a`,
                      color: levelColor[item.level],
                      flexShrink: 0,
                    }}
                  />
                )}
              </Box>
              {item.detail && (
                <Typography
                  variant="caption"
                  sx={{ color: '#6b7280', lineHeight: 1.4, display: 'block' }}
                >
                  {item.detail}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}
