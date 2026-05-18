import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SkillCard from '../component/SkillCard'
import {
  skillCategories,
  automationCategory,
  levelLegend,
} from '../data/skills'

export default function SkillMap() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)',
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="overline"
            sx={{
              color: '#6366f1',
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: 12,
            }}
          >
            BACKEND ENGINEER ROADMAP
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: '#0f172a',
              mt: 1,
              mb: 1.5,
              fontSize: { xs: 28, md: 40 },
            }}
          >
            バックエンドエンジニア スキルマップ
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#64748b', maxWidth: 720, mx: 'auto' }}
          >
            〜 知識がつながる全体像 〜
            <br />
            設計からデプロイまで、現場で必要な9つの領域を体系化
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1.5,
              mt: 3,
            }}
          >
            {levelLegend.map((lv) => (
              <Box
                key={lv.label}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                  bgcolor: '#fff',
                  px: 2,
                  py: 0.8,
                  borderRadius: 5,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: lv.color,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 700, color: '#334155' }}
                >
                  {lv.label}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: '#94a3b8', display: { xs: 'none', md: 'inline' } }}
                >
                  / {lv.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </Box>

        <Box sx={{ mt: 5 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
              gap: 3,
              alignItems: 'stretch',
            }}
          >
            <SkillCard category={automationCategory} />
            <Box
              sx={{
                bgcolor: '#0f172a',
                color: '#fff',
                borderRadius: 2,
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="overline"
                sx={{ color: '#a5b4fc', fontWeight: 700, letterSpacing: 2 }}
              >
                LEARNING TIP
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mt: 0.5, mb: 1.5 }}
              >
                小さく作って、運用しながら育てる
              </Typography>
              <Typography variant="body2" sx={{ color: '#cbd5e1', lineHeight: 1.7 }}>
                全部を一度に学ぼうとしない。
                CRUD → 認証 → デプロイ → ログ → テストの順で、
                動くものを少しずつ拡張していくと、
                各領域の繋がりが自然に見えてきます。
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6, pb: 2 }}>
          <Typography variant="caption" sx={{ color: '#94a3b8' }}>
            © Backend Engineer Skill Map
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
